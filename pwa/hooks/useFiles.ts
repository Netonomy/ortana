"use client";
import { useAtom } from "jotai";
import { useContext, useEffect } from "react";
import { DateSort } from "@tbd54566975/dwn-sdk-js";
import { filesAtom } from "@/state/storage/filesAtom";
import DigitalDocument from "@/types/DigitalDocument";
import { loadingAtom } from "@/state/loadingAtom";
import { RecordsReadResponse } from "@tbd54566975/web5/dist/types/dwn-api";
import useUploadDocToIndex from "./useUploadDocToIndex";
import { Web5Context } from "@/app/Web5Provider";

export default function useFiles() {
  const [files, setFiles] = useAtom(filesAtom);
  const web5Context = useContext(Web5Context);
  const [, setLoading] = useAtom(loadingAtom);

  const uploadDocToIndex = useUploadDocToIndex();

  async function fetchFiles() {
    if (web5Context) {
      const filesRes = await web5Context.web5.dwn.records.query({
        message: {
          filter: {
            schema: "https://schema.org/DigitalDocument",
          },
          dateSort: DateSort.CreatedDescending,
        },
      });

      const _files: DigitalDocument[] = [];
      if (filesRes.records)
        for (var record of filesRes.records) {
          try {
            let fileObj: DigitalDocument = await record.data.json();
            fileObj.identifier = record.id;

            _files.push(fileObj);
          } catch (err) {
            console.log(err);
          }
        }

      setFiles(_files);
    }
  }

  async function UploadFiles(files: FileList) {
    if (web5Context) {
      setLoading(true);
      for (var i = 0; i < files.length; i++) {
        // Upload image to blob store
        const blobResult = await web5Context.web5.dwn.records.create({
          data: files[i],
          message: {
            dataFormat: files[i].type,
          },
        });

        await uploadDocToIndex(
          files[i],
          web5Context.did!,
          blobResult.record!.id
        ).catch((err) => console.error(err));

        let data: DigitalDocument = {
          "@context": "https://schema.org",
          "@type": "DigitalDocument",
          author: web5Context.did!,
          name: files[i].name,
          encodingFormat: files[i].type,
          size: files[i].size.toString(),
          datePublished: new Date().toISOString(),
          identifier: "",
          url: blobResult.record!.id, // TODO: Change this to https url of file instead of record id
        };

        // Upload as File Object: https://schema.org/DigitalDocument
        const fileObjectRes = await web5Context.web5.dwn.records.create({
          data: data,
          message: {
            schema: "https://schema.org/DigitalDocument",
          },
        });

        if (fileObjectRes.record) data.identifier = fileObjectRes.record?.id;

        // Update Photos array in local storage
        setFiles((prevDocs: DigitalDocument[]) => [data, ...prevDocs]);
      }

      setLoading(false);
    }
  }

  async function deleteFile(recordId: string) {
    if (web5Context) {
      setLoading(true);

      try {
        const deleteRes = await web5Context.web5.dwn.records.delete({
          message: {
            recordId: recordId,
          },
        });

        setFiles((prevFiles) =>
          prevFiles.filter((file) => file.identifier !== recordId)
        );
      } catch (err) {
        console.error(err);
      }

      setLoading(false);
    }
  }

  async function openFile(recordId: string) {
    if (web5Context) {
      setLoading(true);
      web5Context.web5.dwn.records
        .read({
          message: {
            recordId: recordId,
          },
        })
        .then((blobResult: RecordsReadResponse) => {
          if (blobResult.record) {
            blobResult.record.data.blob().then((blob: any) => {
              const url = URL.createObjectURL(blob);
              window.open(url, "_blank");
              setLoading(false);
            });
          }
        });
    }
  }

  async function updateFileName(newName: string, recordId: string) {
    if (web5Context) {
      try {
        // Update files state to reflect new file name
        setFiles((prevFiles) =>
          prevFiles.map((file) =>
            file.identifier === recordId ? { ...file, name: newName } : file
          )
        );

        // Fetch file to be updated
        const fileRes = await web5Context.web5.dwn.records.read({
          message: {
            recordId: recordId,
          },
        });

        if (fileRes.record) {
          let file = fileRes.record;
          let fileData: DigitalDocument = await file.data.json();
          fileData.name = newName;

          await file.update({
            data: fileData,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }
  }

  useEffect(() => {
    fetchFiles();
  }, []);

  return { files, UploadFiles, deleteFile, openFile, updateFileName };
}
