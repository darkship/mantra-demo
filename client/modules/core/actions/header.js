export default {
  logout: ({Meteor, FlowRouter}) => {
    Meteor.logout((err) =>{
      if (err) {
        console.error(err);
      } else {
        FlowRouter.go('/login');
      }
    });
  },
};
