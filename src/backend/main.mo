import List "mo:core/List";
import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  type TruckStatus = {
    #active;
    #inTransit;
    #completed;
  };

  type Truck = {
    number : Nat;
    location : Text;
    status : TruckStatus;
  };

  let trucks = List.empty<Truck>();
  type Pricing = {
    cost : Nat;
    time : Nat;
    teamSize : Nat;
  };

  let pricingConfig = Map.empty<Text, Pricing>();

  var quoteRequestsCount = 0;

  public shared ({ caller }) func setupDefaultConfig() : async () {
    pricingConfig.add("1BHK", { cost = 10000; time = 4; teamSize = 3 });
    pricingConfig.add("2BHK", { cost = 20000; time = 6; teamSize = 5 });
    pricingConfig.add("3BHK", { cost = 30000; time = 8; teamSize = 8 });
  };

  public query ({ caller }) func getEstimate(homeSize : Text) : async Pricing {
    quoteRequestsCount += 1;
    switch (pricingConfig.get(homeSize)) {
      case (null) { Runtime.trap("Home size not found") };
      case (?estimate) { estimate };
    };
  };

  public shared ({ caller }) func updatePricingConfig(homeSize : Text, cost : Nat, time : Nat, teamSize : Nat) : async () {
    let newPricing : Pricing = {
      cost;
      time;
      teamSize;
    };
    pricingConfig.add(homeSize, newPricing);
  };

  public query ({ caller }) func getAllTruckStatuses() : async [Truck] {
    trucks.reverse().toArray();
  };
};
