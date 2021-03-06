import { DiaperOptionsType, FeedingOptionsType } from './events.d';

export interface BasicInputProps {
  value: string;
  setValue: any;
}

export interface InputPropsWithInvalidCheck extends BasicInputProps {
  isInvalid: boolean;
}

export interface PasswordInputProps extends InputPropsWithInvalidCheck {
  passwordType?: 'initial' | 'confirmation';
}

export interface EventTypeInputProps extends BasicInputProps {
  typeOptions: any[];
}
