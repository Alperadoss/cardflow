import { YugiohCardListing } from '../../../../services/yugioh/types';
import MarketTable from '../../../marketTable/MarketTable';
import YugiohCardMarketTableCell from './YugiohCardMarketTableCell';

type YugiohCardMarketProps = {
  listings: YugiohCardListing[];
  page: number;
  onChangePage: (page: number) => void;
  count: number;
};

function YugiohCardMarket(props: YugiohCardMarketProps): JSX.Element {
  return (
    <>
      <div className="hidden lg:flex flex-col md:items-center justify-center overflow-auto">
        <MarketTable
          page={props.page}
          onPageChange={props.onChangePage}
          count={props.count}
          className="w-11/12 md:w-full lg:w-5/6 mb-12"
        >
          <thead className="text-sm lg:text-base">
            <tr>
              <th colSpan={3}>Seller</th>
              <th colSpan={2}>Card details</th>
              <th>Available</th>
              <th colSpan={3}>Buy</th>
            </tr>
          </thead>
          <tbody className="text-sm lg:text-base">
            {props.listings.map((l) => (
              <YugiohCardMarketTableCell key={l.id} listing={l} />
            ))}
          </tbody>
        </MarketTable>
      </div>
      <div className="flex lg:hidden flex-col mx-auto overflow-auto">
        <MarketTable
          page={props.page}
          onPageChange={props.onChangePage}
          count={props.count}
          className="w-11/12 mx-auto md:w-5/6 mb-12"
        >
          <thead className="text-sm lg:text-base">
            <tr>
              <th>Seller</th>
              <th colSpan={2}>Card details</th>
              <th>Available</th>
              <th colSpan={3}>Buy</th>
            </tr>
          </thead>
          <tbody className="text-sm lg:text-base">
            {props.listings.map((l) => (
              <YugiohCardMarketTableCell key={l.id} listing={l} />
            ))}
          </tbody>
        </MarketTable>
      </div>
    </>
  );
}

export default YugiohCardMarket;
