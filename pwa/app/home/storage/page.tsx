"use client";
import { Card, CardContent } from "@/components/ui/card";
import FilesList from "./FilesList";
import { Fragment, useCallback, useContext, useState } from "react";
import { isMobile } from "react-device-detect";
import useFiles from "@/hooks/useFiles";
import { useDropzone } from "react-dropzone";
import { arrayToFileList } from "@/lib/utils";
import DataTopBar from "@/components/DataTopBar";
import { useMediaQuery } from "react-responsive";
import { Web5Context } from "@/app/Web5Provider";

export default function FilesPage() {
  const [searchText, setSearchText] = useState("");
  const { UploadFiles } = useFiles();
  const web5Context = useContext(Web5Context);

  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" }); // md breakpoint in Tailwind CSS

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // convert File[] to FileList
      const fileList = arrayToFileList(acceptedFiles);
      // do something with the files
      UploadFiles(fileList);
    },
    [web5Context]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });

  return (
    <div className="flex flex-1 w-full flex-col items-center gap-4 p-2 md:p-0">
      <DataTopBar
        searchText={searchText}
        setSearchText={setSearchText}
        uploadBtnAccept="*"
        onFilesSelected={async (files: FileList) => {
          if (files) await UploadFiles(files);
        }}
      />
      {!isNotMobile ? (
        <FilesList searchText={searchText} />
      ) : (
        <Card
          {...getRootProps()}
          className={`flex flex-1  w-full ${
            isDragActive ? "bg-gray-100 dark:bg-[#1d1d1d]" : ""
          }`}
        >
          <input {...getInputProps()} />
          <CardContent className="flex flex-1 flex-col items-center w-full max-h-[calc(100vh-125px)] overflow-y-auto overflow-x-visible p-2">
            <FilesList searchText={searchText} />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
