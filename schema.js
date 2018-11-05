const schema = `
type Badge {
	reason_id: String!
	reason_description: String!
	reason_badge: String!
	reason_name: String!
}

type VehicleStatus {
  status_name: String

}

type Vehicle {
	avg_dealer_type_inv_cnt_mmy: Float
	binPrice: Int
	cost_to_market: Float
	current_dealer_supply: Float
	current_max_bid: Int
	driveTrain: String
	exterior_color: String
	interiorColor: String
	make: String
	market_day_supply_mmy: Float
	mileage: Int
	model: String
	thumbnail: String
	seller: String
	auction_vendor: String
	state: String
	trim: String
	vehicle_grade: String
	vehicle_id: String
	vin: String
	year: Int
    vehicle_status: VehicleStatus
}

enum BusinessEvent {
  AVAILABLE
  VEHICLE_SOLD
  AUCTION_ENDED
  VEHICLE_REMOVED
}

type Mutation {
  updateVehicle(atc_org_id: String!, vehicle_id: String!): Recommendation
  simulateKinesisEvent(vehicle_id: String!, status_name: String!): Recommendation
}

type Query {
	getRecommendations(atc_org_id: String): [Recommendation]
}

type Recommendation {
	atc_org_id: String
  vehicle_id: String
	badges: [Badge]
	vehicle: Vehicle
}

type Subscription {
  updatedVehicle: Recommendation
  
}

schema {
	query: Query
	mutation: Mutation
	subscription: Subscription
}
`;
module.exports.Schema = schema;


