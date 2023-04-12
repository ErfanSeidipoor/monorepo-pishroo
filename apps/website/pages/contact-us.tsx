import { useLayout } from "@website/hooks";
import { useEffect } from "react";

import TEXTS from "@pishroo/texts";

import { ContactUsPage } from "@website/components/pages/contactUs";
import { GetServerSidePropsContext } from "next";
import { addApolloState, initializeApollo } from "@website/libs/apolloClient";
import { QUERY_GET_USERS_PUBLIC } from "@website/components/pages/contactUs/components/saleExperts/gql";
import {
  GetUsersPublicQuery,
  GetUsersPublicQueryVariables,
} from "@website/gql/graphql";

export function ContactUs() {
  const { setPageTitle, setPage } = useLayout();

  useEffect(() => {
    setPage("Contact Us");
    setPageTitle(TEXTS.WEBSITE_PAGE__CONTACT_US__PAGE_TITLE);
  }, [setPageTitle, setPage]);

  return <ContactUsPage />;
}

export async function getServerSideProps({ req }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo();

  await apolloClient.query<GetUsersPublicQuery, GetUsersPublicQueryVariables>({
    query: QUERY_GET_USERS_PUBLIC,
    variables: {
      getUsersPublicArgs: {},
      paginationArgs: {},
    },
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default ContactUs;
