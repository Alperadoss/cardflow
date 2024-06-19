import { useLoaderData, useParams } from 'react-router-dom';
import YugiohCardImage from '../../components/yugioh/YugiohCardImage';
import YugiohCardDetailsTable from '../../components/yugioh/table/YugiohCardDetailsTable';
import YugiohCardMarket from '../../components/yugioh/table/market/YugiohCardMarket';
import { CardDetailsLoaderData } from '../../services/yugioh/types';
import { useState } from 'react';
import { yugiohService } from '../../services/yugioh/yugiohService';
import { useEffectAfterInitialLoad } from '../../util/useEffectAfterInitialLoad';
import { legacyErrorToast } from '../../util/errorToast';
import BreadcrumbNavigation, { BreadcrumbLink } from '../../components/BreadcrumbNavigation';

function YugiohCardDetails(): JSX.Element {
  const data = useLoaderData() as CardDetailsLoaderData;
  const params = useParams();
  const { cardInSet, cardListings: cardListingsData } = data;
  const [cardListings, setCardListings] = useState(cardListingsData);

  const [page, setPage] = useState(1);

  function changePage(page: number) {
    yugiohService
      .getCardListingsByCardSetId(Number(params.id), page)
      .then((data) => {
        setCardListings(data);
        setPage(page);
      })
      .catch(legacyErrorToast);
  }

  useEffectAfterInitialLoad(() => {
    yugiohService
      .getCardListingsByCardSetId(Number(params.id))
      .then(setCardListings)
      .catch(legacyErrorToast);
    setPage(1);
  }, [params.id]);

  const breadcrumbNavigation: BreadcrumbLink[] = [
    {
      text: 'Buy',
      href: '/buy',
    },
    {
      text: 'Search',
      href: '/search',
    },
  ];

  return (
    <section className="bg-[#F5F5F5]">
      <BreadcrumbNavigation
        links={breadcrumbNavigation}
        heading={cardInSet.yugioh_card.card_name}
      />
      <div className="flex flex-col pt-4 pb-4 lg:flex-row justify-center items-center lg:items-start gap-8">
        <YugiohCardImage src={cardInSet.yugioh_card.image} />
        <YugiohCardDetailsTable cardInSet={cardInSet} />
      </div>
      <YugiohCardMarket
        page={page}
        onChangePage={changePage}
        count={cardListings.count}
        listings={cardListings.results}
      />
    </section>
  );
}

export default YugiohCardDetails;
