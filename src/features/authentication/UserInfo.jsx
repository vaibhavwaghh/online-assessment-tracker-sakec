import { useSelector } from "react-redux";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUser } from "./useUser";

function UserInfo() {
  const {
    user: {
      email,
      user_metadata: { details },
    },
  } = useUser();

  let curruserDetails;

  var currentYear, currentDivision, departmentName, userName, userRole;
  if (details?.studentId) {
    userRole = "student";
    curruserDetails = details.currstudentDetails;

    ({
      currentDiv: { currentDivision },
      departmentName: { departmentName },
      currentYear: { currentYear },
      studentName: userName,
    } = curruserDetails[0]);
  }

  const divisions = useSelector((state) => state.student.allDivTeacher);
  if (details?.teacherId) {
    userRole = "teacher";
    curruserDetails = details.currteacherDetails;
    ({
      teachingInYear: { currentYear },

      teachingInDepartment: { departmentName },
      teacherName: userName,
    } = curruserDetails[0]);

    currentDivision = divisions?.join(",");
  }
  if (details?.hodId) {
    userRole = "H.O.D";
    curruserDetails = details.currhodDetails;
    ({ departmentName, hodName: userName } = curruserDetails[0]);
  }

  if (details?.principalId) {
    (userRole = "Principal"), (userName = details.principalName);
  }
  return (
    <Form>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input type="text" value={userName} disabled />
      </FormRow>
      <FormRow label="Role">
        <Input type="text" value={userRole} disabled />
      </FormRow>
      {!details?.principalId && (
        <FormRow label="Department Name">
          <Input type="text" value={departmentName} disabled />
        </FormRow>
      )}
      {!details?.principalId && !details?.hodId && (
        <>
          <FormRow label="Current Year">
            <Input type="text" value={currentYear} disabled />
          </FormRow>
          <FormRow label="Current Division">
            <Input type="text" value={currentDivision} disabled />
          </FormRow>
        </>
      )}
    </Form>
  );
}

export default UserInfo;
