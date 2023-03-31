import cls from "classnames";
import "leaflet/dist/leaflet.css";
import { ReactNode, useRef, useState } from "react";
import ReactAutoComplete from "react-autocomplete";
import "../tailwind-imports.css";
import { CloseIcon, EmptyIcon, SpinnerIcon } from "./icons";

export type IAutoComplete<T extends {}> = {
  items?: T[];
  getLabel?: (t: T) => string;
  getValue?: (t: T) => string;
  onChangeInput?: (input: string) => void;
  onClick?: () => void;
  onSelectItem?: (selectedItem: T | undefined) => void;
  selectedItem?: T;
  placeholder?: string;
  disabled?: boolean;
  renderItem?: (t: T, isHighlighted: boolean) => ReactNode;
  notFoundLabel?: string;
  searchLabel?: string;
};

export const AutoComplete = <T extends {}>({
  items = [],
  getLabel = () => "",
  getValue = () => "",
  onChangeInput = () => "",
  onSelectItem = () => "",
  onClick,
  selectedItem,
  disabled,
  renderItem,
  notFoundLabel = "Not Found!",
  placeholder = "Search",
  searchLabel = "Search",
}: IAutoComplete<T>) => {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<ReactAutoComplete>(null);

  return (
    <div
      className={cls(
        isFocused && "p-3",
        isFocused && "md:p-0",
        isFocused && "fixed",
        "box-border",
        "top-0",
        "left-0",
        "w-full",
        "md:relative"
      )}
    >
      <div
        className={cls(
          "h-screen",
          "w-screen",
          "items-center",
          "flex",
          "justify-center",
          "bg-slate-200",
          "opacity-95",
          "fixed",
          "top-0",
          "left-0",
          "md:hidden",
          !isFocused && "hidden"
        )}
      />
      <ReactAutoComplete
        value={
          isFocused
            ? inputValue
            : selectedItem
            ? getValue(selectedItem)
            : inputValue
        }
        inputProps={{
          placeholder,
          onFocus: () => {
            setIsFocused(true);
          },
          onBlur: () => {
            setIsFocused(false);
          },
        }}
        ref={inputRef}
        renderInput={(props) => (
          <div className={cls("w-full", "h-full", "relative")}>
            <input
              className={cls(
                "bock",
                "w-full",
                "h-full",
                "rounded-lg",
                "focus:border-1",
                "px-2",
                "text-lg",
                "text-gray-600"
              )}
              {...props}
              disabled={disabled}
            ></input>
            <div
              className={cls(
                "absolute",
                "left-2",
                "top-1",
                "z-10",
                "flex",
                "bg-white",
                "flex",
                "h-14",
                "justify-center",
                "items-center"
              )}
            >
              {loading && (
                <div className={cls("btn", "cursor-pointer", "mx-3")}>
                  <SpinnerIcon />
                </div>
              )}
              {selectedItem && !isFocused && !loading && (
                <div
                  className={cls("btn", "cursor-pointer", "mx-3")}
                  onClick={() => {
                    setInputValue("");
                    onSelectItem(undefined);
                  }}
                >
                  <CloseIcon />
                </div>
              )}
              {onClick && (
                <button
                  className={cls(
                    "btn",
                    "block",
                    "bg-primary",
                    "h-14",
                    "rounded-lg",
                    "px-3",
                    "text-white"
                  )}
                  onClick={onClick}
                  disabled={disabled}
                >
                  {searchLabel}
                </button>
              )}
            </div>
          </div>
        )}
        wrapperProps={{
          className: cls(
            "bock",
            "w-full",
            "h-16",
            "rounded-lg",
            "border",
            "relative"
          ),
        }}
        items={items}
        getItemValue={getValue}
        onChange={async (event, inputValue) => {
          setLoading(true);
          setInputValue(inputValue);
          await onChangeInput(inputValue);
          setLoading(false);
        }}
        onSelect={(value) => {
          inputRef.current?.blur();
          setIsFocused(false);
          const item = items.find((item) => getValue(item) === value);
          onSelectItem(item);
        }}
        renderMenu={(children) => (
          <div
            className={cls(
              "bock",
              "w-full",
              "border",
              "absolute",
              "max-h-96",
              "overflow-auto",
              "rounded-lg",
              "mt-1",
              "shadow-md",
              "bg-white"
            )}
          >
            {items.length === 0 ? (
              <div
                className={cls(
                  "flex",
                  "justify-center",
                  "items-center",
                  "p-5",
                  "flex-col"
                )}
              >
                <EmptyIcon />
                <p>{notFoundLabel}</p>
              </div>
            ) : (
              children
            )}
          </div>
        )}
        renderItem={(item, isHighlighted) =>
          renderItem ? (
            renderItem(item, isHighlighted)
          ) : (
            <div
              key={getValue(item)}
              className={cls(
                "bock",
                "w-full",
                "text-gray-600",
                "text-base",
                "h-16",
                "bg-white",
                isHighlighted && "bg-gray-100",
                "flex",
                "items-center",
                "my-2",
                "px-2"
              )}
            >
              {getLabel(item)}
            </div>
          )
        }
      />
    </div>
  );
};

export default AutoComplete;
