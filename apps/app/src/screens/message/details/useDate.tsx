import { Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useMutation, useQuery } from "@apollo/client";
import {
  GetMessageByIdAdminQuery,
  GetMessageByIdAdminQueryVariables,
  UpdateMessageSubmitAdminMutation,
  UpdateMessageSubmitAdminMutationVariables,
} from "@app/gql/graphql";

import {
  MUTATION_UPDATE_MESSAGE_SUBMIT_ADMIN,
  QUERY_GET_MESSAGE_BY_ID_ADMIN,
} from "./gql";

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

  const [
    updateMessageSubmitAdmin,
    { loading: updateMessageActivaitonLoading },
  ] = useMutation<
    UpdateMessageSubmitAdminMutation,
    UpdateMessageSubmitAdminMutationVariables
  >(MUTATION_UPDATE_MESSAGE_SUBMIT_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (res) => {
      ("");
    },
  });

  const onUpdateMessageSubmit = () => {
    updateMessageSubmitAdmin({
      variables: {
        updateMessageSubmitAdminInputs: {
          isSubmited: true,
          messageId,
        },
      },
    });
  };

  return {
    message: message?.getMessageByIdAdmin,
    getMessageLoading,
    messageId: messageId!,
    refetch,
    onUpdateMessageSubmit,
  };
};

export default useData;
