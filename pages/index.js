import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { ReactSVG } from "react-svg";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import cx from "classnames";
import { useIntl, FormattedMessage } from "react-intl";
import { useLocale } from "@onekeyhq/ui-components";

import OneKeyLite from "../components/OneKeyLite";
import H2 from "../components/H2";
import H3 from "../components/H3";
import H4 from "../components/H4";
import H5 from "../components/H5";
import BodyText from "../components/BodyText";
import Card from "../components/Card";

export default function Home() {
  const intl = useIntl();

  const TextVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0 },
  };

  const PortableList = () => {
    const list = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren",
          staggerChildren: 0.3,
        },
      },
    };

    const listItem = {
      hidden: { opacity: 0, y: 16 },
      visible: { opacity: 1, y: 0 },
    };

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);

    return (
      <motion.ul
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={list}
        className="space-y-4"
      >
        <motion.li variants={listItem}>
          <H2>
            <FormattedMessage id="lite__portable__headline" />
          </H2>
        </motion.li>
        <motion.li variants={listItem}>
          <H3>
            <FormattedMessage id="lite__portable__list_wallet" />
          </H3>
        </motion.li>
        <motion.li variants={listItem}>
          <H3>
            <FormattedMessage id="lite__portable__list_pocket" />
          </H3>
        </motion.li>
        <motion.li variants={listItem}>
          <H3>
            <FormattedMessage id="lite__portable__list_envelope" />
          </H3>
        </motion.li>
        <motion.li variants={listItem}>
          <H3>
            <FormattedMessage id="lite__portable__list_card_case" />
          </H3>
        </motion.li>
      </motion.ul>
    );
  };

  return (
    <div>
      <Head>
        <title>Lite | OneKey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative px-8 overflow-x-hidden text-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Hero */}
          <div className="flex flex-col items-center justify-center h-screen py-28 min-h-[640px] md:h-auto md:py-48">
            <motion.div
              initial={{ rotateY: 90, rotateZ: 0, y: -320 }}
              animate={{ rotateY: 0, rotateZ: -45, y: 0 }}
              transition={{ duration: 3, delay: 1, ease: [0.19, 0, 0.26, 1] }}
              className="w-64 md:w-80"
            >
              <OneKeyLite />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 3, ease: [0.33, 1, 0.68, 1] }}
              className="mt-[136px] md:mt-[170px]"
            >
              <div className="relative scale-y-[-1] rotate-45 rounded-[10px] overflow-hidden w-64 md:w-80">
                <OneKeyLite />
                <div className="absolute inset-0 bg-gradient-to-tr from-[rgba(34,35,37,.8)] via-[#0f0f0f] to-[#111111]" />
              </div>
            </motion.div>
            <div className="z-10 -mt-24 text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={TextVariants}
                layout
                transition={{ delay: 4, duration: 0.3 }}
              >
                <H3 className="mb-4 font-normal font-display md:mb-5">
                  <FormattedMessage id="lite__product_name" />
                </H3>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={TextVariants}
                layout
                transition={{ delay: 4.3, duration: 0.3 }}
              >
                <H2
                  className={cx("-mx-1", {
                    "-mr-6": useLocale().locale === "zh-CN",
                  })}
                >
                  <FormattedMessage id="lite__slogan_para_one" />
                  <br />
                  <FormattedMessage id="lite__slogan_para_two" />
                </H2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.6, duration: 0.3 }}
                class="flex justify-center mt-10"
              >
                <div class="animate-bounce bg-[rgba(255,255,255,.1)] border border-[rgba(255,255,255,.1)] p-2 w-10 h-10 rounded-full flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-violet-500"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Connect */}
          <div className="mx-auto py-28 lg:max-w-2xl">
            <div className="relative flex justify-end">
              <InView threshold={0.3}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={cx(
                      "transition duration-[2000ms] w-[244px] md:w-[320px]",
                      {
                        "opacity-0 translate-x-8": !inView,
                      }
                    )}
                  >
                    <Image
                      src="/images/iPhonWithGradient@3x.png"
                      width={244}
                      height={492}
                      layout="responsive"
                      loading="lazy"
                      alt="Mobile Device"
                    />
                  </div>
                )}
              </InView>
              <div className="absolute inline-flex top-16 right-16 md:top-24 md:right-24">
                <InView threshold={0.5}>
                  {({ inView, ref }) => (
                    <div
                      ref={ref}
                      className={cx(
                        "transition duration-[2000ms] block w-64 md:w-80",
                        {
                          "-translate-x-16 opacity-0": !inView,
                        }
                      )}
                    >
                      <OneKeyLite
                        className="shadow-lg"
                        src="/images/OneKeyLite-2@3x.png"
                      />
                    </div>
                  )}
                </InView>
              </div>
            </div>
            <div className="relative md:-mt-80">
              <InView threshold={0.2}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    className={cx("transition duration-1000", {
                      "translate-y-4 opacity-0": !inView,
                    })}
                  >
                    <H2 className="mt-4 mb-2">
                      <FormattedMessage id="lite__connect__headline_scan" />
                      <br />
                      <FormattedMessage id="lite__connect__headline_set_code" />
                      <br />
                      <FormattedMessage id="lite__connect__headline_backed_up" />
                    </H2>
                  </motion.div>
                )}
              </InView>
              <InView threshold={0.2}>
                {({ inView, ref }) => (
                  <div
                    ref={ref}
                    className={cx("transition duration-1000", {
                      "translate-y-4 opacity-0": !inView,
                    })}
                  >
                    <H5 className="opacity-80 md:max-w-sm">
                      <FormattedMessage id="lite__connect__descr" />
                    </H5>
                  </div>
                )}
              </InView>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:mt-64 xl:gap-8">
            {/* Durable */}
            <Card
              className="relative -mx-4 bg-black md:col-span-2 md:mx-0"
              label={intl.formatMessage({ id: "lite__durable__label" })}
            >
              <div className="xl:absolute xl:w-1/2 xl:right-0 xl:top-0 xl:bottom-0">
                <div className="relative z-20 mt-2 -mx-6 md:-mx-8 xl:mx-0 xl:mt-4">
                  <Image
                    src="/images/water@3x.png"
                    layout="responsive"
                    loading="lazy"
                    width={563}
                    height={413}
                  />
                  <div className="absolute top-0 bottom-0 left-0 hidden w-2/5 lg:block bg-gradient-to-r from-black to-black/0" />
                </div>
                <InView>
                  {({ inView, ref }) => (
                    <motion.div
                      ref={ref}
                      className={cx("transition duration-[3000ms]", {
                        "-translate-y-8 -rotate-3": !inView,
                      })}
                    >
                      <div className="w-48 md:w-80 mx-auto rotate-[-60deg] -mt-8">
                        <OneKeyLite />
                      </div>
                    </motion.div>
                  )}
                </InView>
              </div>
              <div className="mt-24 md:mt-48 md:max-w-[618px] xl:w-1/2 xl:mt-0 xl:min-h-[640px] xl:flex xl:flex-col xl:justify-center xl:pr-8">
                <H2>
                  <FormattedMessage id="lite__durable__headline" />
                </H2>
                <H5 className="mt-3 mb-2 opacity-80">
                  <FormattedMessage id="lite__durable__descr_para_one" />
                </H5>
                <H5 className="opacity-80">
                  <FormattedMessage id="lite__durable__descr_para_two" />
                </H5>
              </div>
            </Card>

            {/* Portable */}
            <Card
              className="bg-gradient-to-tr from-[#511111] to-[#404571] -mx-4 md:mx-0"
              label={intl.formatMessage({ id: "lite__portable__label" })}
            >
              <div className="py-24 text-center">
                <PortableList />
              </div>
            </Card>

            {/* Security */}
            <Card
              className="relative -mx-4 md:mx-0 md:flex md:flex-col"
              label={intl.formatMessage({ id: "lite__security__label" })}
            >
              <div className="absolute inset-0 z-[-1]">
                <Image
                  src="/images/OneKeyLiteTexture@3x.png"
                  layout="fill"
                  alt="Texutre"
                />
              </div>
              <div className="py-12 text-center">
                <InView threshold={0.5}>
                  {({ inView, ref }) => (
                    <h2
                      ref={ref}
                      className={cx(
                        "text-8xl leading-[116px] mb-3 duration-1000 md:text-9xl",
                        {
                          "opacity-0 translate-y-4": !inView,
                        }
                      )}
                    >
                      10
                    </h2>
                  )}
                </InView>
                <InView threshold={0.5}>
                  {({ inView, ref }) => (
                    <div
                      ref={ref}
                      className={cx("duration-1000", {
                        "opacity-0 translate-y-4": !inView,
                      })}
                    >
                      <H3>
                        <FormattedMessage id="lite__security__headline_line_one" />
                        <br />
                        <FormattedMessage id="lite__security__headline_line_two" />
                      </H3>
                    </div>
                  )}
                </InView>
              </div>
              <H5 className="w-[209px] mt-10 md:mt-auto">
                <FormattedMessage id="lite__security__descr" />
              </H5>
            </Card>
          </div>

          {/* Shipping */}
          {/* <div className="max-w-xl py-24 mx-auto text-center md:py-48 xl:py-56">
            <div className="flex justify-center mb-6 md:mb-12">
              <ReactSVG
                className="w-10 h-10 md:w-16 md:h-16 xl:w-20 xl:h-20"
                src="/icons/shipping.svg"
              />
            </div>
            <H4 className="mb-2 md:mb-6">
              <FormattedMessage id="lite__shipping__headline" />
            </H4>
            <BodyText className="md:text-2xl">
              <FormattedMessage id="lite__shipping__descr" />
            </BodyText>
          </div> */}

          {/* Buy */}
          <div className="mx-auto text-center mb-28 md:max-w-xs">
            <H2 className="mb-9">
              <FormattedMessage id="lite__buy__headline" />
            </H2>
            {/* <a
              href="https://www.shopify.com/"
              className="flex items-center justify-center py-4 border-b border-[#292929]"
            >
              <BodyText className="mr-1">
                <FormattedMessage id="lite__buy__shopity" />
              </BodyText>
              <ReactSVG src="/icons/link.svg" className="w-5 h-5" />
            </a> */}
            <a
              href="https://shop91406649.m.youzan.com/wscshop/showcase/homepage?kdt_id=91214481"
              className="flex items-center justify-center py-4 border-b border-[#292929]"
            >
              <BodyText className="mr-1">
                <FormattedMessage id="lite__buy__youzan" />
              </BodyText>
              <ReactSVG src="/icons/link.svg" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-[rgba(255,255,255,.1)] to-[rgba(196,196,196,0)]" />
      </main>
    </div>
  );
}
