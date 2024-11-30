import React, { Dispatch, SetStateAction } from 'react';
import {
  CldUploadWidget,
  CloudinaryUploadWidgetInfo,
  CloudinaryUploadWidgetResults,
} from 'next-cloudinary';
import { FaCloudUploadAlt } from 'react-icons/fa';

const ImageUploader = ({
  setProductImage,
}: {
  setProductImage: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <div>
        <CldUploadWidget
          uploadPreset="events"
          onOpen={() => {
            console.log('Widget opened');
          }}
          onSuccess={(results: CloudinaryUploadWidgetResults) => {
            const uploadedResult = results.info as CloudinaryUploadWidgetInfo;
            const profileImageURL = {
              image: uploadedResult.secure_url,
            };
            setProductImage(profileImageURL.image);
            console.log(profileImageURL.image);
          }}
          options={{
            tags: ['events image'],
            // publicId: `${organizationName}/${Date.now()}`,
            // publicId: "b2c",

            sources: ['local'],
            googleApiKey: '<image_search_google_api_key>',
            showAdvancedOptions: false,
            // cropping: true,
            multiple: false,
            showSkipCropButton: false,
            croppingAspectRatio: 1.61,
            croppingDefaultSelectionRatio: 1.61,
            croppingShowDimensions: true,
            croppingCoordinatesMode: 'custom',
            // maxImageHeight: 100,
            // croppingValidateDimensions: true,
            defaultSource: 'local',
            resourceType: 'image',
            folder: 'events',

            styles: {
              palette: {
                window: '#ffffff',
                sourceBg: '#f4f4f5',
                windowBorder: '#90a0b3',
                tabIcon: '#000000',
                inactiveTabIcon: '#555a5f',
                menuIcons: '#555a5f',
                link: '#000000',
                action: '#000000',
                inProgress: '#464646',
                complete: '#000000',
                error: '#cc0000',
                textDark: '#000000',
                textLight: '#fcfffd',
                theme: 'white',
              },
            },
          }}
        >
          {({ open }) => {
            return (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  open();
                }}
              >
                <div className="p-2 text-dashBtnBlue font-semibold flex items-center justify-center gap-2 border-2 border-dashBtnBlue rounded-2xl">
                  <FaCloudUploadAlt />
                  upload image
                </div>
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
    </div>
  );
};

export default ImageUploader;
