export interface SubscribersList<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
