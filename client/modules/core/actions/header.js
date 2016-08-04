export default {
  logout:({Meteor,FlowRouter,Store})=>{
  	Meteor.logout(function(err){
  		if(err)
  		{
  			console.error(err)
  		}else
  		{
  			FlowRouter.go('/login')
  		}
  	});
  }
}
