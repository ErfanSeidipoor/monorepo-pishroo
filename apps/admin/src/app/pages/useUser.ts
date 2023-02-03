import { gql, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";

import { MeAdminQuery } from "@admin/gql/graphql";
import {
  checkUserSessionFailed,
  checkUserSessionSuccess,
} from "@admin/store/user/user.action";

const QUERY_ME_ADMIN = gql`
  query meAdmin {
    meAdmin {
      id
      lastName
      firstName
      createdAt
      roles
      username
    }
  }
`;

const useUser = () => {
  const dispatch = useDispatch();

  useQuery<MeAdminQuery>(QUERY_ME_ADMIN, {
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      dispatch(checkUserSessionFailed(error));
    },
    onCompleted: ({ meAdmin }) => {
      dispatch(checkUserSessionSuccess(meAdmin!));
    },
  });

  return {};
};

export default useUser;
