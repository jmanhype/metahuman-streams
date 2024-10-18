import { useState } from "react";
import Header from "../../components/Header";
import SettingsPanel from "./components/SettingsPanel";
import ApplicationForm from "./components/ApplicationForm";
import DeleteForm from "./components/DeleteForm";
import PasswordForm from "./components/PasswordForm";

const Profile = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isDeleteFormVisible, setDeleteFormVisible] = useState(false);
  const [isPasswordFormVisible, setPasswordFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <main>
      <Header />
      <SettingsPanel
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setPasswordFormVisible={setPasswordFormVisible}
        setDeleteFormVisible={setDeleteFormVisible}
        setFormVisible={setFormVisible}
      />
      {isFormVisible ? (
        <ApplicationForm setFormVisible={setFormVisible} />
      ) : (
        <></>
      )}

      {isDeleteFormVisible ? (
        <DeleteForm setDeleteFormVisible={setDeleteFormVisible} />
      ) : (
        <></>
      )}

      {isPasswordFormVisible ? (
        <PasswordForm
          setIsEditing={setIsEditing}
          setPasswordFormVisible={setPasswordFormVisible}
        />
      ) : (
        <></>
      )}
    </main>
  );
};

export default Profile;
