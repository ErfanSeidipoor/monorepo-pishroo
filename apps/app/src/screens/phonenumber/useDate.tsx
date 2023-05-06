import { useMutation } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import TEXTS from "libs/texts/src";
import moment from "moment";
import { useForm } from "react-hook-form";
import { Alert, PermissionsAndroid } from "react-native";

import {
  InsertDailyCallsAdminMutation,
  InsertDailyCallsAdminMutationVariables,
} from "@app/gql/graphql";

import CallLogs from "react-native-call-log";

import { MUTATION_INSERT_DAILY_CALLS_ADMIN } from "./gql";

const useData = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      calls: [],
    },
  });

  const [insertDailyCallsAdmin, { loading }] = useMutation<
    InsertDailyCallsAdminMutation,
    InsertDailyCallsAdminMutationVariables
  >(MUTATION_INSERT_DAILY_CALLS_ADMIN, {
    onError: (error) => {
      Alert.alert(error.message);
    },
    onCompleted: (response) => {
      Alert.alert(TEXTS.PAGE_NEW_PHONENUMBER__SUCCESS);
    },
  });

  const onSyncCallLogs = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CALL_LOG,
      {
        title: "Call Log Example",
        message: "Access your call logs",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      const calllogs = await CallLogs.load(300, {
        minTimestamp: moment().startOf("day").toDate().getTime(),
      });

      console.log({ calllogs });

      if (calllogs.length) {
        insertDailyCallsAdmin({
          variables: {
            insertDailyCallsAdminInputs: {
              calls: calllogs.map((calllog) => ({
                newPhone: calllog.phoneNumber,
                timestamp: calllog.timestamp,
              })),
            },
          },
        });
      }
    } else {
      Alert.alert(TEXTS.PAGE_NEW_PHONENUMBER__PERMISSION_DENY);
    }
  };

  return {
    isValid,
    control,
    errors,
    handleSubmit,
    onSyncCallLogs,
    loading,
  };
};

export default useData;
