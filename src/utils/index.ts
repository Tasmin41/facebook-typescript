export const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result: any = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export function debounce(func: Function, timeout = 300) {
  let timer: NodeJS.Timeout;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function toTwoDecimalPlaces(num: number) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export const secondsToTime = (
  secs: number
): { h: number; m: number; s: number } => {
  let hours = Math.floor(secs / (60 * 60));

  let divisor_for_minutes = secs % (60 * 60);
  let minutes = Math.floor(divisor_for_minutes / 60);

  let divisor_for_seconds = divisor_for_minutes % 60;
  let seconds = Math.ceil(divisor_for_seconds);

  let obj = {
    h: hours,
    m: minutes,
    s: seconds,
  };
  return obj;
};

export const openFullscreen = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
};

export function splitUnit(v: string) {
  if (typeof v === "string" && v !== "") {
    var split = v.match(/^([-.\d]+(?:\.\d+)?)(.*)$/);
    return { value: split[1].trim(), unit: split[2].trim() };
  } else {
    return { value: v, unit: "" };
  }
}

/** 
Supported url: 
http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index

http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o

http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0

http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s

http://www.youtube.com/embed/0zM3nApSvMg?rel=0

http://www.youtube.com/watch?v=0zM3nApSvMg

http://youtu.be/0zM3nApSvMg

**/
export function youtubeParser(url: string) {
  var regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length == 11 ? match[7] : false;
}

export function convertToSlug(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

export function toDecimalNumber(number, places = 0) {
  return Number(number).toFixed(places);
}

export function generatePriceLabel({
  currency,
  price_type,
  price,
  interval,
  interval_count,
}: {
  currency?: string;
  price_type: "FREE" | "ONE_TIME";
  price: number;
  interval: string;
  interval_count: number;
}) {
  if (price_type === "ONE_TIME") {
    return `${currency}${price}`;
  } else if (price_type === "FREE") {
    return "Free";
  }
  let plan_label = `${currency}${price}/`;
  if (interval_count > 1) {
    plan_label += ` ${interval_count} ${lowerCase(interval)}s`;
  } else {
    plan_label += ` ${lowerCase(interval)}`;
  }
  console.log(plan_label, "plan_label");

  return plan_label;
}

export function generatePriceArray({
  currency,
  price,
  interval,
  interval_count,
  price_type,
  strike_through_price = "",
}: {
  currency?: string;
  price_type: "FREE" | "ONE_TIME" | "SUBSCRIPTION";
  price: number;
  interval: string;
  strike_through_price?: string;
  interval_count: number;
}) {
  let res: [string, string, string] = ["", "", ""];
  if (price_type === "ONE_TIME") {
    res[0] = `${currency}${price}`;
    res[2] = strike_through_price ? currency + strike_through_price : null;
  } else if (price_type === "FREE" || !price_type) {
    res[0] = "Free";
    res[2] = strike_through_price ? currency + strike_through_price : null;
  } else if (price_type === "SUBSCRIPTION") {
    const label = `/${
      interval_count > 1 ? interval_count : ""
    }${interval.toLowerCase()}${interval_count > 1 ? "s" : ""}`;
    res = [
      `${currency}${price}`,
      label,
      strike_through_price ? currency + strike_through_price : null,
    ];
  }
  return res;
}

export const noImageLink =
  "https://letcheck.b-cdn.net/ezycourseAssets/no-image.jpeg";

// Capitalize
export const textCapitalize = (res: string) => {
  const converToLowercase = res.toLowerCase();
  return (
    converToLowercase.slice(0, 1).toUpperCase() + converToLowercase.slice(1)
  );
};

import postcssJs from "postcss-js";
import postcss from "postcss";
import { lowerCase } from "lodash";

export function StyleToObject(str: string) {
  let res;
  try {
    const root = postcss.parse(str);
    res = postcssJs.objectify(root);
  } catch (e) {}
  return res;
}

export function nFormatter(num: number, digits: number) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

export function getVideoURL(meta: {
  file_type: string;
  file_link: string;
  videoID: string;
}) {
  return ["youtube", "vimeo", "embedded"].includes(meta?.file_type)
    ? meta.file_link
    : `https://iframe.mediadelivery.net/embed/29280/${meta?.videoID}?autoplay=true`;
}

export function getThumbnailURL(meta: {
  file_type: string;
  thumbnail_link: string;
  webp_link: string;
}) {
  return ["youtube", "vimeo", "embedded"].includes(meta?.file_type)
    ? meta.thumbnail_link
    : meta.webp_link;
}

export function setNestedValue(
  obj: Record<string, any>,
  path: string[],
  value: any,
  setrecursively = false
) {
  path.reduce((a, b, level) => {
    if (
      setrecursively &&
      typeof a[b] === "undefined" &&
      level + 1 !== path.length
    ) {
      a[b] = {};
      return a[b];
    }

    if (level + 1 === path.length) {
      a[b] = value;
      return value;
    }
    return a[b];
  }, obj);
}

type PlanType = "free" | "basic" | "pro" | "business" | "vip";
export function planLevel(plan_label: PlanType) {
  const plan: Record<string, number> = {
    free: 0,
    basic: 1,
    pro: 2,
    business: 3,
    vip: 4,
  };
  return plan[plan_label.toLowerCase()];
}

export function getNotAndChatStatus({
  plan,
  userType,
  current_period_end,
  is_private_chat_enabled,
}: {
  plan: PlanType;
  userType: string;
  current_period_end: string;
  is_private_chat_enabled;
}) {
  // console.log(plan, userType, current_period_end,is_private_chat_enabled,'oky')
  const response = {
    is_notification_fetch: 0,
    is_chat_icon_available: 0,
  };
  if (userType == "STUDENT") {
    response.is_notification_fetch = 2;
    if (plan == "free") {
      response.is_chat_icon_available = 0;
    } else if (
      current_period_end &&
      new Date() >= new Date(current_period_end)
    ) {
      response.is_chat_icon_available = 0;
      return response;
    } else if (plan == "business" || plan == "vip") {
      response.is_chat_icon_available = 2;
    } else {
      response.is_chat_icon_available = 1;
    }
    if (
      (!is_private_chat_enabled ||
        is_private_chat_enabled == undefined ||
        is_private_chat_enabled == false ||
        is_private_chat_enabled == null) &&
      response.is_chat_icon_available == 2
    ) {
      // console.log('cheking..', 'is icon')
      response.is_chat_icon_available = 1;
    }
  } else {
    response.is_chat_icon_available = 2;
    if (plan == "free") {
      response.is_notification_fetch = 0;
    } else if (
      current_period_end &&
      new Date() >= new Date(current_period_end)
    ) {
      response.is_notification_fetch = 0;
      return response;
    } else if (plan == "business" || plan == "vip") {
      response.is_notification_fetch = 2;
    } else {
      response.is_notification_fetch = 1;
    }
  }

  return response;
}

export function isZeroDecimalCurrency(currency) {
  const currencies = [
    "BIF",
    "CLP",
    "DJF",
    "GNF",
    "JPY",
    "KMF",
    "KRW",
    "MGA",
    "PYG",
    "RWF",
    "UGX",
    "VND",
    "VUV",
    "XAF",
    "XOF",
    "XPF",
    "HUF",
    "TWD",
    "UGX",
  ];
  return currencies.includes(currency.toUpperCase());
}

export function wait(milliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export const loadScript = (
  src: string,
  options?: {
    async?: boolean;
    defer?: boolean;
    crossorigin?: string;
  }
) => {
  return new Promise((resolve) => {
    let script = document.createElement("script");
    script.src = src;
    if(options?.async){
      script.async = options.async;
    }
    if(options?.defer){
      script.defer = options.defer;
    }
    if(options?.crossorigin){
      script.crossOrigin = options.crossorigin;
    }
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
    return script as HTMLScriptElement;
  });
};

export const checkFileAvailability = (fileUrl: string, retries = 5, interval = 5000): Promise<string> => {
  return new Promise((resolve, reject) => {
    const check = (count) => {
      fetch(fileUrl)
        .then((response) => {
          if (response.status === 200) {
            resolve(fileUrl);
          } else {
            if (count > 0) {
              setTimeout(() => check(count - 1), interval);
            } else {
              reject(`File not available after ${retries} retries`);
            }
          }
        })
        .catch(() => {
          if (count > 0) {
            setTimeout(() => check(count - 1), interval);
          } else {
            reject(`File not available after ${retries} retries`);
          }
        });
    };
    check(retries);
  });
};
