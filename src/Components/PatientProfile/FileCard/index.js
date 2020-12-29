import "./index.css";

import { Icon } from "@iconify/react";
import cloudDownloadOutlined from "@iconify/icons-bx/bx-cloud-download";

const FileCard = () => {
  return (
    <div className="patientprofile__file">
      <p>Check Up Result.pdf</p>
      <Icon
        icon={cloudDownloadOutlined}
        style={{ fontSize: "30px", cursor: "pointer" }}
      />
    </div>
  );
};

export default FileCard;
