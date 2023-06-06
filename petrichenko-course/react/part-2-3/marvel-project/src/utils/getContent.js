import ErrorMessage from "../components/UI/ErrorMessage";
import Skeleton from "../components/UI/Skeleton";
import Spinner from "../components/UI/Spinner";

const getContent = (
  process,
  SucceedComponent,
  WaitingComponent = Skeleton,
  LoadingComponent = Spinner,
  FailComponent = ErrorMessage
) => {
  switch (process) {
    case "waiting":
      return <WaitingComponent />;
    case "loading":
      return <LoadingComponent />;
    case "succeeded":
      return <SucceedComponent />;
    case "failed":
      return <FailComponent />;
    default:
      throw new Error("Unexpected process");
  }
};

export default getContent;
