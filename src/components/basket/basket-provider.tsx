import * as React from "react";
import { BasketContext } from "./Basket-context";
import { BasketData, BasketItem } from "./basket-data";

export interface DataProvider {
  getInitialData(): Promise<BasketItem[]>;
  onAllItemsDeleted(): Promise<BasketItem[]>;
  onItemAdded(id: string): Promise<BasketItem[]>;
  onItemDeleted(id: string): Promise<BasketItem[]>;
  registerToChanges(callback: (items: BasketItem[]) => void): any;
}

export interface BasketProviderProps {
  dataProvider: DataProvider;
}

export class BasketProvider extends React.Component<
  BasketProviderProps,
  BasketData
> {
  constructor(props: BasketProviderProps) {
    super(props);

    this.state = {
      items: [],
      onAllItemsDeleted: this.onAllItemsAdded,
      onItemAdded: this.onItemAdded,
      onItemDeleted: this.onItemDeleted,
    };
  }

  componentWillMount() {
    this.props.dataProvider.registerToChanges((items: BasketItem[]) => {
      this.setState({ items });
    });
  }

  componentDidMount() {
    this.props.dataProvider.getInitialData().then((items) => {
      this.setState({ items });
    });
  }

  onAllItemsAdded = () => {
    this.props.dataProvider.onAllItemsDeleted().then((items) => {
      this.setState({ items });
    });
  };

  onItemAdded = (id: string) => {
    this.props.dataProvider.onItemAdded(id).then((items) => {
      this.setState({ items });
    });
  };

  onItemDeleted = (id: string) => {
    this.props.dataProvider.onItemDeleted(id).then((items) => {
      this.setState({ items });
    });
  };

  public render() {
    return (
      <BasketContext.Provider value={this.state}>
        {this.props.children}
      </BasketContext.Provider>
    );
  }
}
