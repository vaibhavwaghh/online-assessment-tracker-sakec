import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../ui/Button";
import ButtonText1 from "../ui/ButtonText1";

import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  const moveBack = useMoveBack();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "4em" }}>
        <Row>
          <Heading as="h1">
            Account details <span> </span>
            <ButtonText1 onClick={moveBack}>&larr; Back</ButtonText1>
          </Heading>
        </Row>
        <Row>
          <UpdateUserDataForm />
        </Row>
      </div>
    </>
  );
}

export default Account;
