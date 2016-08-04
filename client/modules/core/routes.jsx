import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import ThreePanelLayout from './components/three_panel_layout.jsx';
import Header from './containers/header'

import Login from './containers/login';
import Register from './containers/register';

import Modulelist from './containers/modulelist';


export default function (injectDeps, {FlowRouter,Meteor}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const ThreePanelLayoutCtx = injectDeps(ThreePanelLayout);
  
  FlowRouter.triggers.enter([function(context, redirect){
    if(!Meteor.userId())
        redirect("/login")
  }], {except: ['home','login','register']});

  FlowRouter.triggers.enter([function(context, redirect){
    if(Meteor.userId())
        redirect("/modules")
  }], {only: ['home','login','register']});

  FlowRouter.route('/', {
    name:'home',
    triggersEnter: [function(context, redirect) {
    redirect('/login');
  }],
  })
  FlowRouter.route('/login', {
    name: 'login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
  FlowRouter.route('/register', {
    name: 'register',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });
  FlowRouter.route('/modules', {
    name: 'modules',
    action() {
      mount(ThreePanelLayoutCtx, {
        content: () => (<Modulelist />),
        header:()=>(<Header/>),
        className:'modulelist'        
      });
    }
  });
}
