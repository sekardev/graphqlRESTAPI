const { PubSub } = require('apollo-server');
const { GraphQLScalarType } = require("graphql")
const {mockFormattedDrivinResponse}  = require('./mockVehicleData');
const pubsub = new PubSub(); //create a PubSub instance


const resolvers = {
    Query: {
      getRecommendations: () => mockFormattedDrivinResponse.data.getRecommendations // return all registrations
      
    },

    Mutation: {
      updateVehicle(root,args){
          console.log(args);
          var result = mockFormattedDrivinResponse.data.getRecommendations.find(
            updatedVehicle => updatedVehicle.vehicle.vehicle_id === args.vehicle_id
          );
          console.log(result)
          result.vehicle.vehicle_status.status_name ='SOLD';
          pubsub.publish('UPDATE_VEHICLE', { updatedVehicle: result });  // publish to a topic

          return result;       
    }
      },
      Subscription: {
        updatedVehicle: {  // create a channelAdded subscription resolver function.
          subscribe: () => pubsub.asyncIterator('UPDATE_VEHICLE')  // subscribe to changes in a topic
        }
      }
    }
module.exports.Resolvers = resolvers;
