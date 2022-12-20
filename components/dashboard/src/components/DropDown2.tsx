/**
 * Copyright (c) 2022 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import React, { FunctionComponent, useEffect, useMemo, useState } from "react";
import Arrow from "./Arrow";

export interface DropDown2Element {
    id: string;
    element: JSX.Element;
    isSelectable?: boolean;
}

export interface DropDown2Props {
    getElements: (searchString: string) => DropDown2Element[];
    searchPlaceholder?: string;
    disableSearch?: boolean;
    expanded?: boolean;
    onSelectionChange: (id: string) => void;
}

export const DropDown2: FunctionComponent<DropDown2Props> = (props) => {
    const [showDropDown, setShowDropDown] = useState<boolean>(!!props.expanded);
    const onSelected = useMemo(
        () => (elementId: string) => {
            props.onSelectionChange(elementId);
            setShowDropDown(false);
        },
        [props],
    );
    const [search, setSearch] = useState<string>("");
    const filteredOptions = props.getElements(search);
    const [selectedElementTemp, setSelectedElementTemp] = useState<string | undefined>(filteredOptions[0]?.id);

    // reset search when the drop down is expanded or closed
    useEffect(() => {
        setSearch("");
        if (showDropDown && selectedElementTemp) {
            document.getElementById(selectedElementTemp)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
        // we only want this behavior when showDropDown changes to true.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showDropDown]);

    const onKeyDown = useMemo(
        () => (e: React.KeyboardEvent) => {
            if (!showDropDown) {
                return;
            }
            if (e.key === "ArrowDown") {
                e.preventDefault();
                let idx = filteredOptions.findIndex((e) => e.id === selectedElementTemp);
                while (idx++ < filteredOptions.length - 1) {
                    const candidate = filteredOptions[idx];
                    if (candidate.isSelectable) {
                        setSelectedElementTemp(candidate.id);
                        document.getElementById(candidate.id)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        return;
                    }
                }
                return;
            }
            if (e.key === "ArrowUp") {
                e.preventDefault();
                let idx = filteredOptions.findIndex((e) => e.id === selectedElementTemp);
                while (idx-- > 0) {
                    const candidate = filteredOptions[idx];
                    if (candidate.isSelectable) {
                        setSelectedElementTemp(candidate.id);
                        document.getElementById(candidate.id)?.scrollIntoView({ behavior: "smooth", block: "nearest" });
                        return;
                    }
                }
                return;
            }
            if (e.key === "Escape") {
                setShowDropDown(false);
                e.preventDefault();
            }
            if (e.key === "Enter" && selectedElementTemp && filteredOptions.some((e) => e.id === selectedElementTemp)) {
                e.preventDefault();
                props.onSelectionChange(selectedElementTemp);
                setShowDropDown(false);
            }
        },
        [filteredOptions, props, selectedElementTemp, showDropDown],
    );

    const handleBlur = useMemo(
        () => () => {
            // postpone a little, so it doesn't fire before a click event for the main element.
            setTimeout(() => setShowDropDown(false), 100);
        },
        [setShowDropDown],
    );

    const toggleDropDown = useMemo(
        () => () => {
            setShowDropDown(!showDropDown);
        },
        [setShowDropDown, showDropDown],
    );

    return (
        <div onKeyDown={onKeyDown} className="relative flex flex-col">
            <div
                className={
                    "h-16 bg-gray-100 dark:bg-gray-800 flex items-center px-2 " +
                    (showDropDown
                        ? "rounded-t-lg"
                        : "rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer")
                }
                onClick={toggleDropDown}
            >
                {props.children}
                <div className="flex-grow" />
                <div className="mr-2">
                    <Arrow direction={showDropDown ? "up" : "down"} />
                </div>
            </div>
            {showDropDown && (
                <div className="absolute w-full top-12 bg-gray-100 dark:bg-gray-800 max-h-72 overflow-auto rounded-b-lg mt-3 z-50 p-2">
                    {
                        <div className={props.disableSearch ? "h-0" : "h-12"} onBlur={handleBlur}>
                            <input
                                type="text"
                                autoFocus
                                className={
                                    "w-full focus rounded-lg " +
                                    (props.disableSearch &&
                                        " fixed -top-20") /* we don'T want search, but want to keep all the focus anvigation behavior. So we are moving the input element out of view. */
                                }
                                placeholder={props.disableSearch ? "" : props.searchPlaceholder}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    }
                    <ul>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((element) => {
                                let selectionClasses = `dark:bg-gray-800 cursor-pointer`;
                                if (element.id === selectedElementTemp) {
                                    selectionClasses = `bg-gray-200 dark:bg-gray-700 cursor-pointer`;
                                }
                                if (!element.isSelectable) {
                                    selectionClasses = ``;
                                }
                                return (
                                    <li
                                        key={element.id}
                                        id={element.id}
                                        className={"h-16 rounded-lg flex items-center px-2 " + selectionClasses}
                                        onMouseDown={() => {
                                            if (element.isSelectable) {
                                                setSelectedElementTemp(element.id);
                                                onSelected(element.id);
                                            }
                                        }}
                                        onMouseOver={() => setSelectedElementTemp(element.id)}
                                    >
                                        {element.element}
                                    </li>
                                );
                            })
                        ) : (
                            <li key="no-elements" className={"rounded-md "}>
                                <div className="h-12 pl-8 py-3 text-gray-800 dark:text-gray-200">No results</div>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};
