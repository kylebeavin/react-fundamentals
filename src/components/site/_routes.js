import React from 'react';
import Home from './Home';
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo';
import JSXRules from '../concepts/JSXRules'
import ClassComponentDemo from '../ClassComponentDemo';
import PropsDemo from '../concepts/PropsDemo'
import LifeCycleCodepen from '../concepts/LifeCycleCodepen';
import Resources from './Resources';
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import ReactConceptsApp from '../apps/concept-list-app/ReactConceptsApp';
import NytApp from '../apps/nyt-app/NytApp';
import FriendListApp from '../apps/friend-list/FriendListApp';

export const routes = [
    {
      path: '/' || '/home',
      exact: true,
      sidebar: () => <div>Home</div>,
      main: () => <Home />
    },
    {
      path: '/functionalcomponent',
      exact: true,
      main: () => < FunctionalComponentDemo />
    },
    {
      path: '/JSXRules',
      exact: true,
      main: () => < JSXRules />
    },
    {
      path: '/ClassComponentDemo',
      exact: true,
      main: () => < ClassComponentDemo />
    },
    {
      path: '/propsdemo',
      exact: true,
      main: () => < PropsDemo />
      
                  /*<div>
                    <PropsDemo title="Beast with a Beard" author="Adam Smith" codepenUrl="https://codepen.io/Adamws33/pen/KZQxwJ" date="01/15/2018"/>
                    <PropsDemo title="Celtic Beast" author="Allison Summers" codepenUrl="https://codepen.io/alsummers/pen/jYzyZZ" date="01/15/2018"/>
                    <PropsDemo title="Beast from Caracas" author="Andres(Dre) Martin" codepenUrl="https://codepen.io/dreMartin/pen/eyVLGN" date="01/15/2018"/>
                    <PropsDemo title="Beast with the Flu" author="Andrew Gunst" codepenUrl="https://codepen.io/agunst99/pen/RxMYOM" date="01/15/2018"/>
                  </div>*/
    },
    {
      path: '/LifeCycleCodepen.js',
      exact: true,
      main: () => < LifeCycleCodepen />
    },
    {
      path: '/resources',
      exact: true,
      sidebar: () => <div>Works Cited</div>,
      main: () => <Resources />
  },
  {
    path: '/timer',
    exact: true,
    main: () => < TimePiecesApp />
  },
  {
    path: '/ReactConceptsApp',
    exact: true,
    main: () => < ReactConceptsApp />
  },
  {
    path: '/NytApp',
    exact: true,
    main: () => < NytApp />
  },
  {
    path: '/FriendListApp',
    exact: true,
    main: () => <FriendListApp/>
  }
]