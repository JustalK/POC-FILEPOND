import { useState } from 'react';
import { getServerUrl } from '../../../../libs/utils';

import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css';
import { FilePond, registerPlugin } from 'react-filepond';

// Import the plugin code
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

// Register the plugin
registerPlugin(FilePondPluginFileValidateType);

export function Poc() {
  const [files, setFiles] = useState<any>([]);
  return (
    <div>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        filePosterMaxHeight={256}
        server={getServerUrl('poc5')}
        name="files"
        allowFileTypeValidation={true}
        acceptedFileTypes={['image/png', 'image/jpeg']}
        labelIdle='<span class="filepond--label-action">Browse</span> / Edit the upload'
      />
    </div>
  );
}

export default Poc;
