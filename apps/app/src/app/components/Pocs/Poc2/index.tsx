import { useState } from 'react';
import { getServerUrl } from '../../../../libs/utils';
import { FilePond, registerPlugin } from 'react-filepond';

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginImageResize from 'filepond-plugin-image-resize';
import FilePondPluginImageTransform from 'filepond-plugin-image-transform';
import FilePondPluginImageEdit from 'filepond-plugin-image-edit';

import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import 'filepond-plugin-image-edit/dist/filepond-plugin-image-edit.css';

// Import FilePond styles
import 'filepond/dist/filepond.min.css';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginImageEdit
);

import '../../../../vendor/doka.min.css';
// @ts-ignore
import { create } from '../../../../vendor/doka.esm.min';

export function Poc() {
  const [files, setFiles] = useState<any>([]);
  return (
    <div>
      <FilePond
        files={files}
        allowMultiple={true}
        maxFiles={3}
        server={getServerUrl('poc1')}
        name="documents" /* sets the file input name, it's filepond by default */
        labelIdle='<span class="filepond--label-action">Browse</span> / Edit the upload'
        onupdatefiles={setFiles}
        onpreparefile={(file, output) => {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(output);
          document.body.appendChild(img);
        }}
        imageResizeTargetWidth={200}
        imageResizeTargetHeight={144}
        imageResizeUpscale={false}
        imageResizeMode={'contain'}
        imageEditEditor={create({
          cropMinImageWidth: 128,
          cropMinImageHeight: 128,
        })}
      />
    </div>
  );
}

export default Poc;
