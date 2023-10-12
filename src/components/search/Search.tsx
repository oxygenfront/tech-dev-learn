"use client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";

const Search: React.FC = () => {
	const [inputValue, setInputValue] = useState<string>("");
	const [focused, setIsFocused] = useState<boolean>(false);

	function fnInputValue(event: ChangeEvent<HTMLInputElement>) {
		setInputValue(event.target.value);
	}

	function performSearch() {
		console.log("Поиск");
	}

	function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
		if (event.key === "Enter") {
			performSearch();
		}
	}

	function handleFocus() {
		setIsFocused(true);
	}

	function handleBlur() {
		setIsFocused(false);
	}

	return (
		<div className={focused ? "search focused" : "search"}>
			<div className="search__wrapper">
				<BsSearch className="search__button" />
				<input
					value={inputValue}
					onChange={fnInputValue}
					onKeyDown={handleKeyDown}
					onFocus={handleFocus}
					onBlur={handleBlur}
					type="text"
					placeholder="Поиск курсов"
					className="search__input"
				/>
			</div>
			<button className="search__button" onClick={performSearch}>
				<AiOutlineEnter />
			</button>
		</div>
	);
};

export default Search;