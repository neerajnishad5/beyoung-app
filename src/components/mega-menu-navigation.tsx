import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfIconMenu,
  SfCounter,
  SfIconArrowBack,
  useDropdown,
  useTrapFocus,
  useDisclosure,
  SfInput,
  SfIconSearch,
} from "@storefront-ui/react";
import {
  type FocusEvent,
  Fragment,
  useRef,
  useState,
  useMemo,
  createRef,
  RefObject,
} from "react";
import beyoung from "../../public/icons/beyoung.svg";
import Image from "next/image";
import Link from "next/link";
const actionItems = [
  //   {
  //     icon: <SfIconSearch />,
  //     label: "",
  //     ariaLabel: "search",
  //     role: "button",
  //   },
  {
    icon: <SfIconFavorite />,
    label: "",
    ariaLabel: "Wishlist",
    role: "button",
  },
  {
    icon: <SfIconShoppingCart />,
    label: "",
    ariaLabel: "Cart",
    role: "button",
  },
];

type Node = {
  key: string;
  url: string;
  value: {
    label: string;
    counter: number;
    link?: string;
    banner?: string;
    bannerTitle?: string;
  };
  children?: Node[];
  isLeaf: boolean;
};

const content: Node = {
  key: "root",
  value: { label: "", counter: 0 },
  isLeaf: false,
  children: [
    {
      key: "MEN",
      url: "/mens-clothing",
      value: {
        label: "Men",
        counter: 364,
        banner:
          "https://www.beyoung.in/api/catalog/Navigation/desktop-navigation11.jpg",
        // bannerTitle: "New in designer watches",
      },
      isLeaf: false,
      children: [
        {
          key: "ALL_MEN",
          url: "/mens-clothing",
          value: { label: "All Men's", counter: 364, link: "/mens-clothing" },
          isLeaf: true,
        },
        {
          key: "TOPWEAR",
          value: { label: "Topwear", counter: 164 },
          isLeaf: false,
          children: [
            {
              key: "PRINTED_TSHIRTS",
              value: { label: "Printed T-Shirts", counter: 164, link: "#" },
              isLeaf: true,
            },
            {
              key: "OVERSIZED_TSHIRTS",
              value: { label: "Oversized T-Shirts", counter: 41, link: "#" },
              isLeaf: true,
            },
            {
              key: "PLAIN_TSHIRTS",
              value: { label: "Plain T-Shirts", counter: 20, link: "#" },
              isLeaf: true,
            },
            {
              key: "FULL_SLEEVE_TSHIRTS",
              value: { label: "Full Sleeve T-Shirts", counter: 56, link: "#" },
              isLeaf: true,
            },
            {
              key: "SHIRTS",
              value: { label: "Shirts", counter: 32, link: "#" },
              isLeaf: true,
            },
            {
              key: "ACTIVEWEAR",
              value: { label: "Activewear", counter: 15, link: "#" },
              isLeaf: true,
            },
            {
              key: "HALF_SIZE_TSHIRTS",
              value: { label: "Half Size T-Shirts", counter: 15, link: "#" },
              isLeaf: true,
            },
            {
              key: "COMBOS",
              value: { label: "Combos", counter: 15, link: "#" },
              isLeaf: true,
            },
          ],
        },
        {
          key: "BOTTOMWEAR",
          value: { label: "Bottomwear", counter: 132 },
          isLeaf: false,
          children: [
            {
              key: "ALL_ACTIVITIES",
              value: { label: "All Activities", counter: 132, link: "#" },
              isLeaf: true,
            },
            {
              key: "TRAINING",
              value: { label: "Training", counter: 21, link: "#" },
              isLeaf: true,
            },
            {
              key: "WORKOUT",
              value: { label: "Workout", counter: 43, link: "#" },
              isLeaf: true,
            },
            {
              key: "FOOTBALL",
              value: { label: "Football", counter: 30, link: "#" },
              isLeaf: true,
            },
            {
              key: "FITNESS",
              value: { label: "Fitness", counter: 38, link: "#" },
              isLeaf: true,
            },
          ],
        },
        {
          key: "THEME",
          value: { label: "Theme", counter: 68 },
          isLeaf: false,
          children: [
            {
              key: "TRAVEL",
              value: { label: "Travel", counter: 68, link: "#" },
              isLeaf: true,
            },
            {
              key: "GYM",
              value: { label: "Gym", counter: 68, link: "#" },
              isLeaf: true,
            },
            {
              key: "FOOD",
              value: { label: "Food", counter: 52, link: "#" },
              isLeaf: true,
            },
            {
              key: "TECH",
              value: { label: "Tech", counter: 45, link: "#" },
              isLeaf: true,
            },
            {
              key: "SPORTS",
              value: { label: "Sports", counter: 34, link: "#" },
              isLeaf: true,
            },
            {
              key: "FASHION",
              value: { label: "Fashion", counter: 72, link: "#" },
              isLeaf: true,
            },
            {
              key: "MUSIC",
              value: { label: "Music", counter: 39, link: "#" },
              isLeaf: true,
            },
          ],
        },
      ],
    },
    {
      key: "WOMEN",
      url: "/womens-clothing",
      value: {
        label: "Women",
        counter: 364,
        banner:
          "https://www.beyoung.in/api/catalog/Navigation/desktop-navigation11.jpg",
        // bannerTitle: "New in designer watches",
      },
      isLeaf: false,
      children: [
        {
          key: "ALL_WOMEN",
          value: { label: "All Women's", counter: 364, link: "#" },
          isLeaf: true,
        },
        {
          key: "TOPWEAR",
          value: { label: "Topwear", counter: 164 },
          isLeaf: false,
          children: [
            {
              key: "PRINTED_TSHIRTS",
              value: { label: "Printed T-Shirts", counter: 164, link: "#" },
              isLeaf: true,
            },
            {
              key: "OVERSIZED_TSHIRTS",
              value: { label: "Oversized T-Shirts", counter: 41, link: "#" },
              isLeaf: true,
            },
            {
              key: "PLAIN_TSHIRTS",
              value: { label: "Plain T-Shirts", counter: 20, link: "#" },
              isLeaf: true,
            },
            {
              key: "FULL_SLEEVE_TSHIRTS",
              value: { label: "Full Sleeve T-Shirts", counter: 56, link: "#" },
              isLeaf: true,
            },
            {
              key: "SHIRTS",
              value: { label: "Shirts", counter: 32, link: "#" },
              isLeaf: true,
            },
            {
              key: "ACTIVEWEAR",
              value: { label: "Activewear", counter: 15, link: "#" },
              isLeaf: true,
            },
            {
              key: "HALF_SIZE_TSHIRTS",
              value: { label: "Half Size T-Shirts", counter: 15, link: "#" },
              isLeaf: true,
            },
            {
              key: "COMBOS",
              value: { label: "Combos", counter: 15, link: "#" },
              isLeaf: true,
            },
          ],
        },
        {
          key: "BOTTOMWEAR",
          value: { label: "Bottomwear", counter: 132 },
          isLeaf: false,
          children: [
            {
              key: "ALL_ACTIVITIES",
              value: { label: "All Activities", counter: 132, link: "#" },
              isLeaf: true,
            },
            {
              key: "TRAINING",
              value: { label: "Training", counter: 21, link: "#" },
              isLeaf: true,
            },
            {
              key: "WORKOUT",
              value: { label: "Workout", counter: 43, link: "#" },
              isLeaf: true,
            },
            {
              key: "FOOTBALL",
              value: { label: "Football", counter: 30, link: "#" },
              isLeaf: true,
            },
            {
              key: "FITNESS",
              value: { label: "Fitness", counter: 38, link: "#" },
              isLeaf: true,
            },
          ],
        },
        {
          key: "THEME",
          value: { label: "Theme", counter: 68 },
          isLeaf: false,
          children: [
            {
              key: "TRAVEL",
              value: { label: "Travel", counter: 68, link: "#" },
              isLeaf: true,
            },
            {
              key: "GYM",
              value: { label: "Gym", counter: 68, link: "#" },
              isLeaf: true,
            },
            {
              key: "FOOD",
              value: { label: "Food", counter: 52, link: "#" },
              isLeaf: true,
            },
            {
              key: "TECH",
              value: { label: "Tech", counter: 45, link: "#" },
              isLeaf: true,
            },
            {
              key: "SPORTS",
              value: { label: "Sports", counter: 34, link: "#" },
              isLeaf: true,
            },
            {
              key: "FASHION",
              value: { label: "Fashion", counter: 72, link: "#" },
              isLeaf: true,
            },
            {
              key: "MUSIC",
              value: { label: "Music", counter: 39, link: "#" },
              isLeaf: true,
            },
          ],
        },
      ],
    },
    // {
    //   key: "COMBOS",
    //   value: {
    //     label: "Combos",
    //     counter: 333,
    //   },
    //   isLeaf: true,
    //   children: [],
    // },
  ],
};

const findNode = (keys: string[], node: Node): Node => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(
      restKeys,
      node.children?.find((child) => child.key === currentKey) || node
    );
  }
  return node.children?.find((child) => child.key === keys[0]) || node;
};

const chips = ["Cargos", "Men's Shirts", "Combos", "Joggers"];
import SearchDropdown from "./search-dropdown";

const handleSelect = (selectedOption) => {
  console.log("Selected option:", selectedOption);
};

export default function MegaMenuNavigation() {
  const drawerRef = useRef(null);
  const megaMenuRef = useRef(null);
  const [activeNode, setActiveNode] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const refsByKey = useMemo(() => {
    const buttonRefs: Record<string, RefObject<HTMLButtonElement>> = {};
    content.children?.forEach((item) => {
      buttonRefs[item.key] = createRef();
    });
    return buttonRefs;
  }, [content.children]);

  const { close, open, isOpen } = useDisclosure();
  const { refs, style } = useDropdown({
    isOpen,
    onClose: (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        refsByKey[activeNode[0]]?.current?.focus();
      }
      close();
    },
    placement: "bottom-start",
    middleware: [],
    onCloseDeps: [activeNode],
  });

  const trapFocusOptions = {
    activeState: isOpen,
    arrowKeysUpDown: true,
    initialFocus: "container",
  } as const;
  useTrapFocus(megaMenuRef, trapFocusOptions);
  useTrapFocus(drawerRef, trapFocusOptions);

  const activeMenu = findNode(activeNode, content);
  const bannerNode = findNode(activeNode.slice(0, 1), content);

  const handleOpenMenu = (menuType: string[]) => () => {
    setActiveNode(menuType);
    open();
  };

  const handleBack = () => {
    setActiveNode((menu) => menu.slice(0, menu.length - 1));
  };

  const handleNext = (key: string) => () => {
    setActiveNode((menu) => [...menu, key]);
  };

  const handleBlurWithin = (event: FocusEvent) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      close();
    }
  };

  // const search = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   alert(`Successfully found 10 results for ${inputValue}`);
  // };

  return (
    <div className="mx-[10rem] ">
      <div className="w-full h-full z-10 ">
        <header className="relative" ref={refs.setReference}>
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center px-4 md:px-10 w-full h-full md:z-10">
            <div className="flex items-center ">
              <SfButton
                onClick={handleOpenMenu([])}
                variant="tertiary"
                square
                aria-label="Close menu"
                className="block md:hidden mr-5 bg-transparent hover:bg-primary-800 active:bg-primary-900 active:text-white"
              >
                <SfIconMenu />
              </SfButton>
              <Link href={"/"}>
                <Image
                  src={beyoung}
                  alt="be-young logo"
                  content="cover"
                  width={150}
                  height={100}
                />
              </Link>
            </div>
            {/* <form
            role="search"
            className="hidden md:flex flex-[100%] ml-10"
            onSubmit={search}
          >
            <SfInput
              value={inputValue}
              type="search"
              className="[&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search"
              wrapperClassName="flex-1 h-10 pr-0"
              size="base"
              slotSuffix={
                <span className="flex items-center">
                  <SfButton
                    variant="tertiary"
                    square
                    aria-label="search"
                    type="submit"
                    className="rounded-l-none hover:bg-transparent active:bg-transparent"
                  >
                    <SfIconSearch />
                  </SfButton>
                </span>
              }
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form> */}
            {/* Desktop dropdown */}
            <nav ref={refs.setFloating}>
              <ul
                className="hidden md:flex px-3 py-2"
                onBlur={handleBlurWithin}
              >
                {content.children?.map((menuNode) => (
                  <Link href={menuNode.url}>
                    <li key={menuNode.key} className="">
                      <SfButton
                        variant="tertiary"
                        onMouseEnter={handleOpenMenu([menuNode.key])}
                        onClick={handleOpenMenu([menuNode.key])}
                        ref={refsByKey[menuNode.key]}
                        className="group mr-2 rounded-none !text-neutral-900 hover:bg-[#ffdd00] active:!bg-neutral-300 active:!text-neutral-900 uppercase"
                      >
                        <span className="">{menuNode.value.label}</span>
                      </SfButton>

                      {isOpen &&
                        activeNode.length === 1 &&
                        activeNode[0] === menuNode.key && (
                          <div
                            key={activeMenu.key}
                            style={style}
                            ref={megaMenuRef}
                            className="hidden md:grid gap-x-6 grid-cols-4 bg-white   p-6 left-0 right-0 outline-none z-10"
                            tabIndex={0}
                            onMouseLeave={close}
                          >
                            {activeMenu.children?.map((node) =>
                              node.isLeaf ? (
                                <Fragment key={node.key}>
                                  <SfListItem
                                    as="a"
                                    size="sm"
                                    href={node.value.link}
                                    className="typography-text-sm mb-2"
                                  >
                                    {node.value.label}
                                  </SfListItem>
                                  <div className="col-start-2 col-end-5" />
                                </Fragment>
                              ) : (
                                <div key={node.key}>
                                  <p className="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid">
                                    {node.value.label}
                                  </p>
                                  <ul className="mt-2">
                                    {node.children?.map(
                                      (child) =>
                                        child.isLeaf && (
                                          <li key={child.key}>
                                            <SfListItem
                                              as="a"
                                              size="sm"
                                              href={child.value.link}
                                              className="typography-text-sm py-1.5"
                                            >
                                              {child.value.label}
                                            </SfListItem>
                                          </li>
                                        )
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                            <div className="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow">
                              <img
                                src={bannerNode.value.banner}
                                alt={bannerNode.value.bannerTitle}
                                className="object-contain"
                              />
                              <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                                {bannerNode.value.bannerTitle}
                              </p>
                            </div>
                          </div>
                        )}
                    </li>
                  </Link>
                ))}
                <span
                  className="px-3 py-2 uppercase hover:bg-[#f8eb26] cursor-pointer transition-colors duration-300"
                  onMouseLeave={close}
                >
                  COMBOS
                </span>
                <span
                  className="px-3 py-2 uppercase hover:bg-[#f8eb26] cursor-pointer  transition-colors duration-300"
                  onMouseLeave={close}
                >
                  cargo joggers
                </span>
                <span
                  className="px-3 py-2 uppercase hover:bg-[#f8eb26] cursor-pointer  transition-colors duration-300"
                  onMouseLeave={close}
                >
                  men's shirts
                </span>
                <span
                  className="px-3 py-2 uppercase hover:bg-[#f8eb26] cursor-pointer  transition-colors duration-300"
                  onMouseLeave={close}
                >
                  new arrivals
                </span>
              </ul>
            </nav>
            <nav className="flex flex-nowrap justify-end items-center md:ml-10 gap-x-1">
              <div className="px-2 z-10">
                <SearchDropdown chips={chips} />
              </div>
              {actionItems.map((actionItem) => (
                <SfButton
                  className="text-black bg-transparent hover:bg-primary-800 active:bg-primary-900 active:text-white"
                  key={actionItem.ariaLabel}
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  slotPrefix={actionItem.icon}
                  square
                  onClick={() => {
                    if (actionItem.label === "search") {
                    }
                  }}
                >
                  {actionItem.role === "login" && (
                    <p className="hidden lg:inline-flex whitespace-nowrap mr-2">
                      {actionItem.label}
                    </p>
                  )}
                </SfButton>
              ))}
            </nav>
            {/* <form
            role="search"
            className="flex md:hidden flex-[100%] my-2 border-2 border-pink-500"
            onSubmit={search}
          >
            <SfInput
              value={inputValue}
              type="search"
              className="[&::-webkit-search-cancel-button]:appearance-none"
              placeholder="Search"
              wrapperClassName="flex-1 h-10 pr-0"
              size="base"
              slotSuffix={
                <span className="flex items-center">
                  <SfButton
                    variant="tertiary"
                    square
                    aria-label="search"
                    type="submit"
                    className="rounded-l-none hover:bg-transparent active:bg-transparent"
                  >
                    <SfIconSearch />
                  </SfButton>
                </span>
              }
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form> */}
          </div>
          {/* Desktop dropdown */}
          {/* <nav ref={refs.setFloating}>
          <ul
            className="hidden md:flex px-6 py-2 bg-white border-b border-b-neutral-200 border-b-solid"
            onBlur={handleBlurWithin}
          >
            {content.children?.map((menuNode) => (
              <li key={menuNode.key}>
                <SfButton
                  variant="tertiary"
                  onMouseEnter={handleOpenMenu([menuNode.key])}
                  onClick={handleOpenMenu([menuNode.key])}
                  ref={refsByKey[menuNode.key]}
                  className="group mr-2 !text-neutral-900 hover:!bg-neutral-200 hover:!text-neutral-700 active:!bg-neutral-300 active:!text-neutral-900"
                >
                  <span>{menuNode.value.label}</span>
                  <SfIconChevronRight className="rotate-90 text-neutral-500 group-hover:text-neutral-700 group-active:text-neutral-900" />
                </SfButton>

                {isOpen &&
                  activeNode.length === 1 &&
                  activeNode[0] === menuNode.key && (
                    <div
                      key={activeMenu.key}
                      style={style}
                      ref={megaMenuRef}
                      className="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 left-0 right-0 outline-none"
                      tabIndex={0}
                      onMouseLeave={close}
                    >
                      {activeMenu.children?.map((node) =>
                        node.isLeaf ? (
                          <Fragment key={node.key}>
                            <SfListItem
                              as="a"
                              size="sm"
                              href={node.value.link}
                              className="typography-text-sm mb-2"
                            >
                              {node.value.label}
                            </SfListItem>
                            <div className="col-start-2 col-end-5" />
                          </Fragment>
                        ) : (
                          <div key={node.key}>
                            <p className="typography-text-base font-medium text-neutral-900 whitespace-nowrap px-4 py-1.5 border-b border-b-neutral-200 border-b-solid">
                              {node.value.label}
                            </p>
                            <ul className="mt-2">
                              {node.children?.map(
                                (child) =>
                                  child.isLeaf && (
                                    <li key={child.key}>
                                      <SfListItem
                                        as="a"
                                        size="sm"
                                        href={child.value.link}
                                        className="typography-text-sm py-1.5"
                                      >
                                        {child.value.label}
                                      </SfListItem>
                                    </li>
                                  )
                              )}
                            </ul>
                          </div>
                        )
                      )}
                      <div className="flex flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-100 border-neutral-300 grow">
                        <img
                          src={bannerNode.value.banner}
                          alt={bannerNode.value.bannerTitle}
                          className="object-contain"
                        />
                        <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                          {bannerNode.value.bannerTitle}
                        </p>
                      </div>
                    </div>
                  )}
              </li>
            ))}
          </ul>
        </nav> */}
          {/* Mobile drawer */}
          {isOpen && (
            <>
              <div className="md:hidden fixed inset-0 bg-neutral-500 bg-opacity-50" />
              <SfDrawer
                ref={drawerRef}
                open={isOpen}
                onClose={close}
                placement="left"
                className="md:hidden right-[50px] max-w-[376px] bg-white overflow-y-auto z-10"
              >
                <nav>
                  <div className="flex items-center justify-between p-4 border-b border-b-neutral-200 border-b-solid">
                    <p className="typography-text-base font-medium">
                      Browse products
                    </p>
                    <SfButton
                      onClick={close}
                      variant="tertiary"
                      square
                      aria-label="Close menu"
                      className="ml-2"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </div>
                  <ul className="mt-2 mb-6 ">
                    {activeMenu.key !== "root" && (
                      <li>
                        <SfListItem
                          size="lg"
                          as="button"
                          type="button"
                          onClick={handleBack}
                          className="border-b border-b-neutral-200 border-b-solid"
                        >
                          <div className="flex items-center">
                            <SfIconArrowBack className="text-neutral-500" />
                            <p className="ml-5 font-medium ">
                              {activeMenu.value.label}
                            </p>
                          </div>
                        </SfListItem>
                      </li>
                    )}
                    {activeMenu.children?.map((node) =>
                      node.isLeaf ? (
                        <li key={node.key} className="">
                          <SfListItem
                            size="lg"
                            as="a"
                            href={node.value.link}
                            className="first-of-type:mt-2"
                          >
                            <div className="flex items-center">
                              <p className="text-left ">{node.value.label}</p>
                              <SfCounter className="ml-2">
                                {node.value.counter}
                              </SfCounter>
                            </div>
                          </SfListItem>
                        </li>
                      ) : (
                        <li key={node.key}>
                          <SfListItem
                            size="lg"
                            as="button"
                            type="button"
                            onClick={handleNext(node.key)}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                <p className="text-left">{node.value.label}</p>{" "}
                                <SfCounter className="ml-2">
                                  {node.value.counter}
                                </SfCounter>
                              </div>
                              <SfIconChevronRight className="text-neutral-500" />
                            </div>
                          </SfListItem>
                        </li>
                      )
                    )}
                  </ul>
                  {bannerNode.value.banner && (
                    <div className="">
                      <Link
                        href={"/"}
                        className="flex items-center justify-center overflow-hidden bg-neutral-100 border-neutral-300 grow"
                      >
                        <img
                          src={bannerNode.value.banner}
                          alt={bannerNode.value.bannerTitle}
                          className="object-contain w-[50%] basis-6/12"
                        />
                      </Link>
                      {/* <p className="basis-6/12 p-6 font-medium typography-text-base">
                      {bannerNode.value.bannerTitle}
                    </p> */}
                    </div>
                  )}
                </nav>
              </SfDrawer>
            </>
          )}
        </header>
      </div>
    </div>
  );
}
