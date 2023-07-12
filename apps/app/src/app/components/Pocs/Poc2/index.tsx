import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { getServerUrl } from '../../../../libs/utils';

import './styles.scss';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-file-poster/dist/filepond-plugin-file-poster.min.css';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginImageEditor from '@pqina/filepond-plugin-image-editor';
registerPlugin(FilePondPluginImageEditor, FilePondPluginFilePoster);

import '@pqina/pintura/pintura.css';
import {
  // editor
  openEditor,
  locale_en_gb,
  createDefaultImageReader,
  createDefaultImageWriter,
  createDefaultImageOrienter,
  createDefaultShapePreprocessor,
  legacyDataToImageState,
  processImage,

  // plugins
  setPlugins,
  plugin_crop,
  plugin_crop_locale_en_gb,
  plugin_finetune,
  plugin_finetune_locale_en_gb,
  plugin_finetune_defaults,
  plugin_filter,
  plugin_filter_locale_en_gb,
  plugin_filter_defaults,
  plugin_annotate,
  plugin_annotate_locale_en_gb,
  markup_editor_defaults,
  markup_editor_locale_en_gb,
} from '@pqina/pintura';

registerPlugin(FilePondPluginImageEditor, FilePondPluginFilePoster);

setPlugins(plugin_crop, plugin_finetune, plugin_filter, plugin_annotate);

export function Poc() {
  const [files, setFiles] = useState<any>([]);
  return (
    <div className="poc2">
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        filePosterMaxHeight={256}
        server={getServerUrl('poc2')}
        name="files"
        labelIdle={`<span class="filepond--label-action"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg><br />Upload a file</span>`}
        imageEditor={{
          // map legacy data objects to new imageState objects
          legacyDataToImageState: legacyDataToImageState,

          // used to create the editor, receives editor configuration, should return an editor instance
          createEditor: openEditor,

          // Required, used for reading the image data
          imageReader: [
            createDefaultImageReader,
            {
              /* optional image reader options here */
            },
          ],

          // optionally. can leave out when not generating a preview thumbnail and/or output image
          imageWriter: [
            createDefaultImageWriter,
            {
              /* optional image writer options here */
            },
          ],

          // used to generate poster images, runs an editor in the background
          imageProcessor: processImage,

          // editor options
          editorOptions: {
            utils: ['crop', 'finetune', 'filter', 'annotate'],
            imageOrienter: createDefaultImageOrienter(),
            shapePreprocessor: createDefaultShapePreprocessor(),
            ...plugin_finetune_defaults,
            ...plugin_filter_defaults,
            ...markup_editor_defaults,
            locale: {
              ...locale_en_gb,
              ...plugin_crop_locale_en_gb,
              ...plugin_finetune_locale_en_gb,
              ...plugin_filter_locale_en_gb,
              ...plugin_annotate_locale_en_gb,
              ...markup_editor_locale_en_gb,
            },
          },
        }}
      />
    </div>
  );
}

export default Poc;
