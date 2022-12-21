/**
 * Copyright (c) 2022 Gitpod GmbH. All rights reserved.
 * Licensed under the GNU Affero General Public License (AGPL).
 * See License.AGPL.txt in the project root for license information.
 */

import { FunctionComponent, useCallback, useState } from "react";

export const SSOSetupForm = () => {
    const [clientID, setClientID] = useState("");

    return (
        <div>
            <form>
                <TextInput label="Client ID" value={clientID} onChange={setClientID} id="client_id" />
            </form>
        </div>
    );
};

type TextInputProps = {
    label: string;
    value: string;
    // TODO: have this optional and use an autogen id hook
    // element id attribute value for input
    id: string;
    placeholder?: string;
    onChange: (newValue: string) => void;
};

const TextInput: FunctionComponent<TextInputProps> = ({ label, value, id, placeholder, onChange }) => {
    const handleChange = useCallback(
        (e) => {
            onChange(e.target.value);
        },
        [onChange],
    );

    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                className="max-w-md"
                value={value}
                onChange={handleChange}
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
};
