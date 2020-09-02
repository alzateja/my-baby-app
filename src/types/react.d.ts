import { children, HasChildrenProps, HasHistoryProps, HasChildrenAndHistoryProps } from './index';
import { History } from 'history';
import { ReactNode } from 'react';

export type children = ReactNode;

export interface HasChildrenProps {
  children: children;
}

export interface HasHistoryProps {
  history: History;
}

export type HasChildrenAndHistoryProps = HasHistoryProps & HasChildrenProps;
