"use client";

import {
  FileUploader,
  FileInput,
  FileUploaderContent,
  FileUploaderItem,
} from "../../lib/file-upload";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";
import { DropzoneOptions } from "react-dropzone";
import { Eye, UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";

export const UploaderDynamic = () => {
  const [files, setFiles] = useState<File[]>([]);

  // ? Файл сонголтууд
  const dropzoneOptions: DropzoneOptions = {
    multiple: true,
    maxFiles: 8,
    maxSize: 10 * 1024 * 1024,
  };

  const maxSize = dropzoneOptions.maxSize! / (1024 * 1024);

  return (
    <div className="flex">
      <FileUploader
        value={files}
        onValueChange={(newFiles) => setFiles(newFiles ?? [])}
        dropzoneOptions={dropzoneOptions}
        className="w-full"
      >
        <FileInput>
          <div>
            <label className="relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-6 hover:bg-gray-100">
              <div className="text-center">
                <div className="mx-auto max-w-min rounded-md border p-2">
                  <UploadCloud size={20} className="text-black" />
                </div>

                <p className="mt-2 text-sm text-gray-600">
                  <span className="font-semibold">Drag files</span>
                </p>
                <p className="text-xs text-gray-500">
                  Click to upload files &#40;each files should be under {maxSize}MB &#41;
                </p>
              </div>
            </label>
          </div>
        </FileInput>
        <FileUploaderContent className="flex">
          {files &&
            files.length > 0 &&
            files?.map((file, i) => (
              <FileUploaderItem key={i} index={i} fileInfo={file}>
                {/* Энэ modal-р зургийг харна эсвэл local файлыг харуулна. */}
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className={cn("absolute", "left-1 top-1")}
                      onClick={() => {
                        if (!file.type.startsWith("image/")) {
                          const fileURL = URL.createObjectURL(file);
                          window.open(fileURL, "_blank");
                        }
                      }}
                    >
                      <Eye className="h-4 w-4 duration-200 ease-in-out hover:stroke-blue-500" />
                    </button>
                  </DialogTrigger>
                  {file.type.startsWith("image/") && (
                    <DialogContent
                      onInteractOutside={(e) => {
                        e.preventDefault();
                      }}
                      className="sm:max-w-[425px]"
                    >
                      <DialogHeader>
                        <DialogTitle>Зураг харах</DialogTitle>
                      </DialogHeader>
                      <div>
                        <Image
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          height={400}
                          width={400}
                          className="object-cover"
                        />
                      </div>
                    </DialogContent>
                  )}
                </Dialog>
                <span className="w-full max-w-[320px] truncate pl-5">{file.name}</span>
              </FileUploaderItem>
            ))}
        </FileUploaderContent>
      </FileUploader>
    </div>
  );
};
