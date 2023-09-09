"use client";

import { Card, CardContent } from "@/components/ui/card";
import useFile from "@/hooks/useFile";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import AutoSizer from "react-virtualized-auto-sizer";
import { pdfjs } from "react-pdf";
import { FixedSizeList as List } from "react-window";
import "./pdf.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import MyRingLoader from "@/components/MyRingLoader";
import BackBtn from "@/components/BackBtn";
import { Button } from "@/components/ui/button";
import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import AiSideCard from "@/app/home/storage/AiSideCard";

// Set the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

/**
 * Component for displaying a PDF viewer page.
 * @param {Object} params - The parameters for the component.
 * @param {string} params.recordId - The record ID.
 * @returns {JSX.Element} The PDF viewer page component.
 */
export default function PdfViewerPage({
  params: { recordId },
}: {
  params: { recordId: string };
}) {
  const { blob, file } = useFile(recordId);
  const [numPages, setNumPages] = useState<number>();
  const [scale, setScale] = useState<number>(1);
  // const [displayedPage, setDisplayedPage] = useState<number>(1);

  /**
   * Callback function for when the PDF document is successfully loaded.
   * @param {Object} data - The data object containing the number of pages.
   */
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  /**
   * Increase the scale of the PDF document by 0.1.
   */
  function zoomIn() {
    setScale((prevScale) => prevScale + 0.1);
  }

  /**
   * Decrease the scale of the PDF document by 0.1.
   */
  function zoomOut() {
    setScale((prevScale) => prevScale - 0.1);
  }

  return (
    <div className="flex flex-1 w-full flex-row items-center gap-6 py-6 lg:p-4">
      <div className="flex-grow h-full flex flex-col items-center max-h-[calc(100vh-40px)]">
        <Card className="flex flex-1 w-full overflow-hidden">
          <CardContent className="w-full h-full overflow-y-auto flex flex-col p-0 relative">
            {/** Document Control Header */}
            <div className="absolute top-0 left-0 right-0 h-[55px] z-40 flex items-center backdrop-blur-xl bg-white/30 dark:bg-black/30 ">
              <BackBtn path="/home/storage" />

              <div className="flex flex-col flex-auto  ">
                <div className="text-lg font-semibold truncate">
                  {file?.name}
                </div>

                <p className="text-sm text-muted-foreground">
                  {numPages} Pages
                </p>
              </div>

              <div className="flex gap-1">
                <Button
                  onClick={zoomOut}
                  variant={"ghost"}
                  className="rounded-full p-2"
                >
                  <ZoomOutIcon />
                </Button>

                <Button
                  onClick={zoomIn}
                  variant={"ghost"}
                  className="rounded-full p-2"
                >
                  <ZoomInIcon />
                </Button>
              </div>
            </div>

            {blob && (
              <AutoSizer>
                {({ height, width }: { height: number; width: number }) => (
                  <Document
                    file={URL.createObjectURL(blob)}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div
                        className="flex items-center justify-center"
                        style={{ height, width }}
                      >
                        <MyRingLoader />
                      </div>
                    }
                  >
                    <List
                      height={height}
                      itemCount={numPages || 0}
                      itemSize={height}
                      width={width}
                      onScroll={({ scrollOffset }) => {
                        const pageNumber =
                          Math.floor(scrollOffset / height) + 1;

                        // setDisplayedPage(pageNumber);
                      }}
                    >
                      {({ index, style }: { index: number; style: any }) => (
                        <div
                          style={{
                            ...style,
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: "60px",
                            transform: `scale(${scale})`,
                          }}
                        >
                          <Page
                            key={index}
                            pageNumber={index + 1}
                            height={height}
                          />
                        </div>
                      )}
                    </List>
                  </Document>
                )}
              </AutoSizer>
            )}
          </CardContent>
        </Card>
      </div>
      {blob && <AiSideCard blob={blob} recordId={recordId} />}
    </div>
  );
}
