import { Edit2, Trash, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import UploadButton from "./buttons/UploadButton";

export default function DataTopBar(props: {
  searchText: string;
  setSearchText: any;
  uploadBtnAccept: string;
  onFilesSelected: any;
  showSelectBtn?: boolean;
  deleteBtnClicked?: any;
  selecting?: boolean;
  setSelecting?: any;
  setSelectedItems?: any;
}) {
  return (
    <div className="flex items-center w-[90%] lg:w-full ">
      <Input
        type="search"
        placeholder="Search..."
        className=" rounded-lg mr-2 bg-white dark:bg-black"
        value={props.searchText}
        onChange={(e) => props.setSearchText(e.target.value)}
      />

      {props.showSelectBtn && (
        <>
          {props.selecting ? (
            <Button
              className=" border mr-2"
              variant={"ghost"}
              size={"sm"}
              onClick={() => {
                props.setSelectedItems([]);
                props.setSelecting(false);
              }}
            >
              <X />
            </Button>
          ) : (
            <Button
              className=" border mr-2"
              variant={"ghost"}
              size={"sm"}
              onClick={() => props.setSelecting(true)}
            >
              <Edit2 />
            </Button>
          )}
        </>
      )}

      {props.selecting && (
        <Button
          className="border mr-2 bg-white"
          variant={"ghost"}
          size={"sm"}
          onClick={props.deleteBtnClicked}
        >
          <Trash />
        </Button>
      )}

      {!props.selecting && (
        <UploadButton
          accept={props.uploadBtnAccept}
          onFilesChange={props.onFilesSelected}
        />
      )}
    </div>
  );
}
