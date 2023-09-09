"use client";
import { Card, CardContent } from "@/components/ui/card";
import useVideos from "@/hooks/useVideos";
import { useAtom } from "jotai";
import {
  selectedVideosAtom,
  selectingVideosAtom,
} from "@/state/storage/videosAtom";
import GridContainer, {
  GridItemProps,
} from "@/components/containers/GridContainer";
import VideoObject from "@/types/VideoObject";
import GridItem from "../../../../components/GridItem";
import DataTopBar from "@/components/DataTopBar";
import { useState } from "react";

export default function Videos() {
  const { UploadVideos, deleteSelectedVideos, videos } = useVideos();
  const [selectingVideos, setSelectingVideos] = useAtom(selectingVideosAtom);
  const [searchText, setSearchText] = useState("");
  const [, setSelectedVideos] = useAtom(selectedVideosAtom);

  const filteredVideos = videos.filter((video) =>
    video.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
  );

  return (
    <div className="flex flex-1 w-full flex-col items-center gap-4 p-2 md:p-0">
      <DataTopBar
        searchText={searchText}
        setSearchText={setSearchText}
        uploadBtnAccept="video/*"
        onFilesSelected={async (files: FileList) => {
          if (files) await UploadVideos(files);
        }}
        showSelectBtn
        deleteBtnClicked={() => {
          deleteSelectedVideos();
        }}
        selecting={selectingVideos}
        setSelecting={setSelectingVideos}
        setSelectedItems={setSelectedVideos}
      />

      <Card className="flex flex-1 w-[90%] lg:w-full ">
        <CardContent className="flex flex-1 flex-col items-center w-full max-h-[calc(100vh-250px)] overflow-y-auto overflow-x-visible p-2">
          <GridContainer
            items={filteredVideos}
            Component={(props: GridItemProps<VideoObject>) => (
              <GridItem index={props.index} item={props.item} type="video" />
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}
