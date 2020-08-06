import React from 'react';
import {INavigationItem} from '../NavigationItems'

export interface INavigationContext {
    itemsNavigation:Array<INavigationItem>,
    fnToggleNav: Function
}

const context = React.createContext<INavigationContext | null>(null);

export const NavigationProvider = context.Provider;
export const NavigationConsumer = context.Consumer;