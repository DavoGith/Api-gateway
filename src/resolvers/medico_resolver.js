const medicoResolver = {
    Query: {
        medicoByUsername: async(_, { username }, { dataSources }) => {
            
                return await dataSources.medicoAPI.medicoByUsername(username)
        },
    },
    Mutation: {}
};

module.exports = medicoResolver;