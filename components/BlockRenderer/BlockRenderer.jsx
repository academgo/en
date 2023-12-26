// "use client";
import { Heading } from "components/Heading";
import { Paragraph } from "components/Paragraph";
import { Cover } from "components/Cover";
import { theme } from "theme";
import { ImageCustom } from "components/ImageCuston/ImageCustom";
import { Columns } from "components/Columns";
import { Column } from "components/Column";
import { MediaText } from "components/MediaText";
import { ButtonPrimary } from "components/ButtonPrimary";
import { ButtonSecondary } from "components/ButtonSecondary";
import { SliderMain } from "components/SliderMain";
import { ContactForm } from "components/ContactForm";
import { SocialIcons } from "components/SocialIcons";
import { Tickitem } from "components/Tickitem";
import { Carousel } from "components/Carousel";
import { Popup } from "components/Popup";
import { MediaCustom } from "components/MediaCustom";
import { SliderFeedback } from "components/SliderFeedback";
import { AccordionBlock } from "components/AccordionBlock";
import { Tabs } from "components/Tabs";
import { SliderContent } from "components/SliderContent";
import { ContactFormShort } from "components/ContactFormShort";
import { IconBlock } from "components/IconBlock";
import { ChildrenBlock } from "components/ChildrenBlock";
import { LimitWidth } from "components/LimitWidth";
import { IconLeftBlock } from "components/IconLeftBlock";
import { ImageShadow } from "components/ImageShadow";
import { ImageContent } from "components/ImageContent";
import { GiftBlock } from "components/GiftBlock";
import { Actions } from "components/Actions";
import { SmallWidth } from "components/SmallWidth";
import { Price } from "components/Price";
import { ImageShadowLeft } from "components/ImageShadowLeft";
import { BlockShadow } from "components/BlockShadow";
import { MediaLeftBlock } from "components/MediaLeftBlock";
import { MediaRightBlock } from "components/MediaRightBlock";
import { AccordionBeauty } from "components/AccordionBeauty";
import { SocialIconsBig } from "components/SocialIconsBig";
import { SliderImages } from "components/SliderImages";
import { ParallaxBlock } from "components/ParallaxBlock";
import { ScrollToBlock } from "components/ScrollToBlock";
import { ScrollLink } from "components/ScrollLink";
import { LinkTitle } from "components/LinkTitle";
import { VideoShortMobile } from "components/VideoShortMobile";
import { ImageBlog } from "components/ImageBlog";
import { ListBullet } from "../ListBullet";
import { SliderPosts } from "../SliderPosts";
import { VideoMobile } from "components/VideoMobile";
import { TableCore } from "../TableCore";

export const BlockRenderer = ({ blocks }) => {

  const objToArray = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        background: data[`slides_${slideIndex}_slide_background`],
        icon: data[`slides_${slideIndex}_slide_icon`],
        contentColor: data[`slides_${slideIndex}_slide_content_color`],
        title: data[`slides_${slideIndex}_slide_title`],
        titleSize: data[`slides_${slideIndex}_slide_title_size`],
        text: data[`slides_${slideIndex}_slide_text`],
        textSize: data[`slides_${slideIndex}_slide_text_size`],
        buttonBg: data[`slides_${slideIndex}_slide_button_bg`],
        buttonLabelColor: data[`slides_${slideIndex}_slide_button_label_color`],
        buttonLabel: data[`slides_${slideIndex}_slide_button_label`],
        buttonDestination: data[`slides_${slideIndex}_slide_button_destination`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArraySliderContent = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        image: data[`slides_${slideIndex}_slide_image`],
        pretitle: data[`slides_${slideIndex}_slide_pretitle`],
        title: data[`slides_${slideIndex}_slide_title`],
        description: data[`slides_${slideIndex}_slide_description`],
        descriptionColor: data[`slides_${slideIndex}_slide_description_color`],
        iconTime: data[`slides_${slideIndex}_slide_icon_time`],
        iconCost: data[`slides_${slideIndex}_slide_icon_cost`],
        costBig: data[`slides_${slideIndex}_slide_cost_big`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayPosts = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        link: data[`slides_${slideIndex}_slide_link`],
        image: data[`slides_${slideIndex}_slide_image`],
        category: data[`slides_${slideIndex}_slide_category`],
        title: data[`slides_${slideIndex}_slide_title`],
        description: data[`slides_${slideIndex}_slide_description`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArraySliderImages = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        image: data[`slides_${slideIndex}_slide_image`],
        title: data[`slides_${slideIndex}_slide_title`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayCarousel = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        image: data[`slides_${slideIndex}_slide_image`],
        alt: data[`slides_${slideIndex}_slide_alt`],
        aspectRatio: data[`slides_${slideIndex}_slide_ratio`],
        objectFit: data[`slides_${slideIndex}_slide_object_fit`],
        background: data[`slides_${slideIndex}_slide_background`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayFeedback = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        name: data[`slides_${slideIndex}_slide_name`],
        review: data[`slides_${slideIndex}_slide_review`],
        date: data[`slides_${slideIndex}_slide_date`],
        place: data[`slides_${slideIndex}_slide_place`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayActions = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        number: data[`slides_${slideIndex}_slide_number`],
        title: data[`slides_${slideIndex}_slide_title`],
        text: data[`slides_${slideIndex}_slide_text`]
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayAccordion = (data) => {
    const arr = [];
    const slideCount = data.slides;

    for (let i = 0; i < slideCount; i++) {
      const slideIndex = i.toString();
      const slide = {
        question: data[`slides_${slideIndex}_slide_question`],
        answer: data[`slides_${slideIndex}_slide_answer`],
      };
      arr.push(slide);
    }

    return arr;
  };

  const objToArrayTabs = (data) => {
    const arr = [];
    const tabCount = data.tabs;

    for (let i = 0; i < tabCount; i++) {
      const tabIndex = i.toString();
      const tab = {
        titleLittle: data[`tabs_${tabIndex}_tab_title_little`],
        titleFull: data[`tabs_${tabIndex}_tab_title_full`],
        description: data[`tabs_${tabIndex}_tab_description`],
        image: data[`tabs_${tabIndex}_tab_image`],
      };
      arr.push(tab);
    }

    return arr;
  };

  const objToArrayItems = (data) => {
    const arr = [];
    const itemCount = data.items;

    for (let i = 0; i < itemCount; i++) {
      const itemIndex = i.toString();
      const item = data[`items_${itemIndex}_item_item_text`]; // Extract the "item" property
      arr.push(item);
    }

    return arr;
  };

  return blocks.map(block => {
    switch (block.name) {
      case 'core/table': {
        // console.log("Table: ", block.originalContent);
        return (
          <TableCore
            key={block.id}
            data={block.originalContent}
          />
        )
      }
      case 'acf/videomobile': {
        // console.log("Video mobile: ", block.attributes)");
        return (
          <VideoMobile
            key={block.id}
            videoId={block.attributes.data.mobile_video_id}
            posterImage={block.attributes.data.mobile_poster_image}
            alt={block.attributes.data.mobile_poster_image_alt}
          />
        )
      }
      case 'acf/videoshortmobile': {
        // console.log("SidebarRenderer.js: VideoShort block")
        return (
          <VideoShortMobile
            key={block.id}
            videoId={block.attributes.data.video_id}
            posterImage={block.attributes.data.poster_image}
            alt={block.attributes.data.poster_image_alt}
          />
        )
      }
      case "acf/linktitle": {
        // console.log("LINK TITLE: ", block.attributes);
        return (
          <LinkTitle
            key={block.id}
            label={block.attributes.data.label}
            destination={block.attributes.data.destination}
          />
        )
      }
      case "acf/scrolllink": {
        // console.log("SCROLL LINK: ", block.attributes);
        return (
          <ScrollLink
            key={block.id}
            text={block.attributes.data.text}
            link={block.attributes.data.link}
          />
        )
      }
      case "acf/scrolltoblock": {
        // console.log("SCROLL TO BLOCK: ", block.attributes);
        return (
          <ScrollToBlock
            key={block.id}
            id={block.attributes.data.destination}
          />
        )
      }
      case "acf/parallaxblock": {
        // console.log("PARALLAX: ", block.attributes);
        return (
          <ParallaxBlock
            key={block.id}
            image={block.attributes.data.image}
            title={block.attributes.data.title}
            text={block.attributes.data.text}
          />
        )
      }
      // case "acf/table": {

      // }
      case "acf/medialeftblock": {
        const innerBlocks = objToArrayItems(block.attributes.data, "items");
        // console.log("MEDIA LEFT: ", innerBlocks)
        return (
          <MediaLeftBlock
            key={block.id}
            image={block.attributes.data.image}
            pretitle={block.attributes.data.pretitle}
            title={block.attributes.data.title}
            textStart={block.attributes.data.text_start}
            items={innerBlocks}
            textEnd={block.attributes.data.text_end}
            linkLabel={block.attributes.data.link_link_label}
            linkDestination={block.attributes.data.link_link_destination}
            buttonLabel={block.attributes.data.button_label}
          />
        )
      }
      case "acf/mediarightblock": {
        const innerBlocks = objToArrayItems(block.attributes.data, "items");
        // console.log("MEDIA RIGHT: ", innerBlocks)
        return (
          <MediaRightBlock
            key={block.id}
            image={block.attributes.data.image}
            pretitle={block.attributes.data.pretitle}
            title={block.attributes.data.title}
            textStart={block.attributes.data.text_start}
            items={innerBlocks}
            textEnd={block.attributes.data.text_end}
            linkLabel={block.attributes.data.link_link_label}
            linkDestination={block.attributes.data.link_link_destination}
            buttonLabel={block.attributes.data.button_label}
          />
        )
      }
      case "acf/listbullet": {
        const innerBlocks = objToArrayItems(block.attributes.data, "items");
        // console.log("LIST BULLET: ", innerBlocks)
        return (
          <ListBullet key={block.id} items={innerBlocks} />
        )
      }
      case "acf/priceblock": {
        const innerBlocks = objToArrayItems(block.attributes.data, "items");
        // console.log("PRICE BLOCK: ", innerBlocks)
        return (
          <Price
            key={block.id}
            icon={block.attributes.data.icon}
            heading={block.attributes.data.heading}
            headingSmall={block.attributes.data.heading_small}
            text={block.attributes.data.text}
            items={innerBlocks}
            cost={block.attributes.data.cost}
            subtext={block.attributes.data.subtext}
          />
        )
      }
      case "acf/actionsblock": {
        const innerBlocks = objToArrayActions(block.attributes.data, "slides");
        // console.log("ACTIONS BLOCK: ", innerBlocks)
        return (
          <Actions
            key={block.id}
            slides={innerBlocks}
            bgImage={block.attributes.data.background_image}
            bgImageAlt={block.attributes.data.background_image_alt}
            heading={block.attributes.data.heading}
            description={block.attributes.data.description}
          />
        )
      }
      case "acf/gift": {
        // console.log("GIFT: ", block.attributes);
        return (
          <GiftBlock
            key={block.id}
            imageBg={block.attributes.data.image_bg}
            imageBgAlt={block.attributes.data.image_bg_alt}
            heading={block.attributes.data.heading}
            headingHighlight={block.attributes.data.heading_highlight}
            description={block.attributes.data.description}
            image={block.attributes.data.image}
            imageAlt={block.attributes.data.image_alt}
          />
        )
      }
      case "acf/imageblog": {
        // console.log("IMAGE BLOG: ", block.attributes);
        return (
          <ImageBlog
            key={block.id}
            src={block.attributes.data.image}
            alt={block.attributes.data.alt}
          />
        )
      }
      case "acf/imageshadow": {
        // console.log("IMAGE SHADOW: ", block.attributes);
        return (
          <ImageShadow
            key={block.id}
            aspectRatio={block.attributes.data.aspect_ratio}
            src={block.attributes.data.image}
            alt={block.attributes.data.alt}
          />
        )
      }
      case "acf/imageshadowleft": {
        // console.log("IMAGE SHADOW: ", block.attributes);
        return (
          <ImageShadowLeft
            key={block.id}
            src={block.attributes.data.image}
            aspectRatio={block.attributes.data.aspect_ratio}
            alt={block.attributes.data.alt}
          />
        )
      }
      case "acf/imagecontent": {
        // console.log("IMAGE CONTENT: ", block.attributes);
        return (
          <ImageContent
            key={block.id}
            image={block.attributes.data.image}
            imageTitle={block.attributes.data.image_title}
            heading={block.attributes.data.heading}
            text={block.attributes.data.text}
            subheading={block.attributes.data.subheading}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </ImageContent>
        )
      }
      case "acf/iconleftflex": {
        // console.log("ICON LEFT FLEX: ", block.attributes);
        return (
          <IconLeftBlock
            key={block.id}
            icon={block.attributes.data.icon}
            iconColor={block.attributes.data.icon_color}
            textStart={block.attributes.data.text_start}
            textContinue={block.attributes.data.text_continue}
            textData={block.attributes.data.text_data}
          />
        )
      }
      case "acf/limitwidth": {
        // console.log("LIMIT WIDTH: ", block.attributes);
        return (
          <LimitWidth key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </LimitWidth>
        )
      }
      case "acf/smallwidth": {
        // console.log("LIMIT WIDTH: ", block.attributes);
        return (
          <SmallWidth key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </SmallWidth>
        )
      }
      case "acf/blockshadow": {
        // console.log("BLOCK SHADOW: ", block.attributes);
        return (
          <BlockShadow key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </BlockShadow>
        )
      }
      case "acf/children": {
        // console.log("CHILDREN: ", block.innerBlocks);
        return (
          <ChildrenBlock key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </ChildrenBlock>
        )
      }
      case "acf/iconblock": {
        // console.log("ICON BLOCK: ", block.attributes);
        return (
          <IconBlock
            key={block.id}
            icon={block.attributes.data.icon}
            title={block.attributes.data.title}
            text={block.attributes.data.text}
          />
        )
      }
      case "acf/mediacustom": {
        // console.log("MEDIA CUSTOM: ", block.attributes);
        return (
          <MediaCustom
            key={block.id}
            image={block.attributes.data.image}
            titleMark={block.attributes.data.title_mark}
            title={block.attributes.data.title}
            description={block.attributes.data.description}
          />
        )
      }
      case "acf/popupbutton": {
        // console.log("POPUP BUTTON: ", block.attributes);
        return (
          <Popup
            key={block.id}
            label={block.attributes.data.label}
            align={block.attributes.data.align}
          />
        )
      }
      case "acf/carousel": {
        const innerBlocks = objToArrayCarousel(block.attributes.data, "slides");
        // console.log("CAROUSEL: ", innerBlocks)
        return (
          <Carousel
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/tickitem": {
        return (
          <Tickitem key={block.id}>
            <BlockRenderer blocks={block.innerBlocks} />
          </Tickitem>
        )
      }
      case "acf/socialicons": {
        // console.log("SOCIAL ICONS: ", block.attributes);
        return (
          <SocialIcons
            key={block.id}
            align={block.attributes.data.align}
          />
        )
      }
      case "acf/socialiconsbig": {
        // console.log("SOCIAL ICONS BIG: ", block.attributes);
        return (
          <SocialIconsBig
            key={block.id}
            align={block.attributes.data.align}
          />
        )
      }
      case "acf/contactform": {
        // console.log("CONTACT FORM: ", block.attributes);
        return (
          <ContactForm
            key={block.id}
            buttonText={block.attributes.data.button_text}
          />
        )
      }
      case "acf/contactformshort": {
        // console.log("CONTACT FORM SHORT: ", block.attributes);
        return (
          <ContactFormShort
            key={block.id}
            buttonText={block.attributes.data.button_text}
          />
        )
      }
      case "acf/buttonprimary": {
        // console.log("BUTTON PRIMARY: ", block.attributes);
        return (
          <ButtonPrimary
            key={block.id}
            text={block.attributes.data.text}
            link={block.attributes.data.link}
          />
        )
      }
      case "acf/buttonsecondary": {
        // console.log("BUTTON SECONDARY: ", block.attributes);
        return (
          <ButtonSecondary
            key={block.id}
            text={block.attributes.data.text}
            link={block.attributes.data.link.url}
          />
        )
      }
      case "acf/slidermain": {
        const innerBlocks = objToArray(block.attributes.data, "slides");
        // console.log("SLIDER: ", innerBlocks)
        return (
          <SliderMain
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/sliderfeedback": {
        const innerBlocks = objToArrayFeedback(block.attributes.data, "slides");
        // console.log("SLIDER FEEDBACK: ", innerBlocks)
        return (
          <SliderFeedback
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/sliderposts": {
        const innerBlocks = objToArrayPosts(block.attributes.data, "slides");
        // console.log("SLIDER POSTS: ", innerBlocks)
        return (
          <SliderPosts
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/slidercontent": {
        const innerBlocks = objToArraySliderContent(block.attributes.data, "slides");
        // console.log("SLIDER CONTENT: ", innerBlocks)
        return (
          <SliderContent
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/sliderimages": {
        const innerBlocks = objToArraySliderImages(block.attributes.data, "slides");
        // console.log("SLIDER IMAGES: ", innerBlocks)
        return (
          <SliderImages
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/accordion": {
        const innerBlocks = objToArrayAccordion(block.attributes.data, "slides");
        // console.log("ACCORDION: ", innerBlocks)
        return (
          <AccordionBlock
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/accordionbeauty": {
        const innerBlocks = objToArrayAccordion(block.attributes.data, "slides");
        // console.log("ACCORDION: ", innerBlocks)
        return (
          <AccordionBeauty
            key={block.id}
            slides={innerBlocks}
          />
        )
      }
      case "acf/tabs": {
        const innerBlocks = objToArrayTabs(block.attributes.data, "tabs");
        // console.log("TABS: ", innerBlocks)
        return (
          <Tabs
            key={block.id}
            tabs={innerBlocks}
          />
        )
      }
      case "core/paragraph": {
        // console.log("PARAGRAPH: ", block.attributes);
        const marginTop = block.attributes.style?.spacing?.margin?.top || '0px';
        const marginBottom = block.attributes.style?.spacing?.margin?.bottom || '0px';
        return (
          <Paragraph
            key={block.id}
            content={block.attributes.content}
            textAlign={block.attributes.align}
            fontSize={block.attributes.fontSize}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            marginTop={marginTop}
            marginBottom={marginBottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
          />
        )
      }
      case "core/post-title":
      case "core/heading": {
        // console.log("HEADING: ", block.attributes);
        return (
          <Heading
            key={block.id}
            level={block.attributes.level}
            content={block.attributes.content}
            textAlign={block.attributes.textAlign}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
          />
        );
      }
      case 'core/cover': {
        // console.log("COVER: ", block.attributes);
        return (
          <Cover
            key={block.id}
            background={block.attributes.url}
            overlayColor={block.attributes.overlayColor}
            overlayOpacity={block.attributes.dimRatio}
            minHeight={block.attributes.minHeight}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes.style?.spacing?.padding?.left}
            paddingRight={block.attributes.style?.spacing?.padding?.right}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Cover>
        )
      }
      case "core/columns": {
        // console.log("COLUMNS:", block.attributes);
        return (
          <Columns
            key={block.id}
            isStackedOnMobile={block.attributes.isStackedOnMobile}
            align={block.attributes.align}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            verticalAlignment={block.attributes.verticalAlignment}
            marginTop={block.attributes.style?.spacing?.margin?.top}
            marginBottom={block.attributes.style?.spacing?.margin?.bottom}
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            gap={block.attributes.style?.spacing?.blockGap?.left}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Columns>
        )
      }
      case "core/column": {
        // console.log("COLUMN:", block.attributes);
        return (
          <Column
            key={block.id}
            width={block.attributes.width}
            textColor={
              theme[block.attributes.textColor] ||
              block.attributes.style?.color?.text
            }
            backgroundColor={
              theme[block.attributes.backgroundColor] ||
              block.attributes.style?.color?.background
            }
            paddingTop={block.attributes.style?.spacing?.padding?.top}
            paddingBottom={block.attributes.style?.spacing?.padding?.bottom}
            paddingLeft={block.attributes.style?.spacing?.padding?.left}
            paddingRight={block.attributes.style?.spacing?.padding?.right}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </Column>
        )
      }
      case "core/image": {
        // console.log("IMAGE:", block.attributes);
        return (
          <ImageCustom
            key={block.id}
            src={block.attributes.url}
            width={block.attributes.width}
            height={block.attributes.height}
            alt={block.attributes.alt || ""}
            align={block.attributes.align}
            href={block.attributes?.href}
          />
        )
      }
      case "core/media-text": {
        // console.log("MEDIA TEXT:", block.attributes);
        return (
          <MediaText
            key={block.id}
            height={block.attributes.height}
            mediaLink={block.attributes.mediaLink}
            verticalAlignment={block.attributes.verticalAlignment}
            mediaPosition={block.attributes.mediaPosition}
            innerBlocks={block.innerBlocks}
          >
            <BlockRenderer blocks={block.innerBlocks} />
          </MediaText>
        )
      }
      default: {
        console.log("UNKNOWN: ", block);
        return null;
      }
    }
  })
}