import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import {
  GetMessageByIdAdminQuery,
  GetMessageByIdAdminQueryVariables,
} from "@app/gql/graphql";

import { QUERY_GET_MESSAGE_BY_ID_ADMIN } from "./gql";

const useData = () => {
  const route = useRoute<{ params: { messageId: string } }>();
  const { messageId } = route.params;

  const {
    loading: getMessageLoading,
    data: message,
    refetch,
  } = useQuery<GetMessageByIdAdminQuery, GetMessageByIdAdminQueryVariables>(
    QUERY_GET_MESSAGE_BY_ID_ADMIN,
    {
      fetchPolicy: "no-cache",
      variables: {
        messageId: messageId!,
      },
      onError: (error) => {
        Alert.alert(error.message);
      },
    }
  );

  return {
    message: message?.getMessageByIdAdmin,
    getMessageLoading,
    messageId: messageId!,
    refetch,
  };
};

export default useData;
