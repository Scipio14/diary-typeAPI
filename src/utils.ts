import { NewDiaryEntry } from './types';
import { Weather, Visibility } from './enums';

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Missing comment');
  }
  return commentFromRequest;
};

const isString = (string: string): boolean => {
  return typeof string === 'string';
};

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Invalid date');
  }
  return dateFromRequest;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const isVisibility = (param: any): boolean => {
  return Object.values(Visibility).includes(param);
};

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Invalid Visibility');
  }
  return visibilityFromRequest;
};

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Invalid weather');
  }
  return weatherFromRequest;
};

const isWeather = (param: any): boolean => {
  return Object.values(Weather).includes(param);
};

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};

export default toNewDiaryEntry;
