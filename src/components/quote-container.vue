<template>
  <div class="component-quote-container">
    <div class="quote-text">
      <i class="fas fa-quote-left" />
      <span :class="quoteData.quoteText.length > 120 ? 'long-quote' : ''">
        {{ quoteData.quoteText }}
      </span>
    </div>
    <div class="quote-author">
      <span>
        {{ quoteData.quoteAuthor === "" ? "Anonymous" : quoteData.quoteAuthor }}
      </span>
    </div>
    <div class="button-container">
      <button
        class="twitter-button"
        @click="handleTweetingQuote"
        title="Tweet this!"
      >
        <i class="fab fa-twitter" />
      </button>
      <button @click="handleNewQuote">New Quote</button>
    </div>
  </div>
</template>

<script>
//#region Imports
import { reactive, toRefs } from "vue";

//#endregion
export default {
  name: "component-quote-container",
  async setup() {
    //#region Reactive References
    const state = reactive({
      quoteData: await handleFetchingQuote(),
    });
    //#endregion

    //#region Watchers
    //#endregion

    //#region Lifecycle hooks
    //#endregion

    //#region Methods
    async function handleFetchingQuote() {
      const proxyUrl = "https://proxy-server-cors-anywhere.herokuapp.com/";
      const apiUrl =
        "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      return new Promise(resolve => {
        resolve(data);
      });
    }

    function handleTweetingQuote() {
      const twitterUrl = `https://twitter.com/intent/tweet?text=${state.quoteData.quoteText} - ${state.quoteData.quoteAuthor}`;
      window.open(twitterUrl, "_blank");
    }

    async function handleNewQuote() {
      const quoteDataSnapshot = state.quoteData;
      try {
        state.quoteData = await handleFetchingQuote();
      } catch (error) {
        state.quoteData = quoteDataSnapshot;
      }
    }
    //#endregion

    return {
      ...toRefs(state),
      handleTweetingQuote,
      handleNewQuote,
    };
  },
};
</script>

<style lang="scss" scoped>
.component-quote-container {
  width: auto;
  max-width: 900px;
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0.6rem 0.6rem 0.6rem rgba(0, 0, 0, 0.2);

  .quote-text {
    font-size: 2.75rem;
  }

  .long-quote {
    font-size: 2rem;
  }

  .fa-quote-left {
    font-size: 4rem;
    &::after {
      content: " ";
      white-space: pre;
    }
  }

  .quote-author {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 400;
    font-style: italic;
  }

  .button-container {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  button {
    cursor: pointer;
    font-size: 1.2rem;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    color: #fff;
    background-color: #333;
    outline: none;
    padding: 0.5rem 1.8rem;
    box-shadow: 0 0.3rem rgba(121, 121, 121, 0.65);

    &:hover {
      filter: brightness(110%);
    }

    &:active {
      transform: translate(0, 0.3rem);
      box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
    }
  }

  .twitter-button {
    &:hover {
      color: #38a1f3;
    }
  }

  .fa-twitter {
    font-size: 1.5rem;
  }
}

@media screen and (max-width: 991px) {
  .component-quote-container {
    margin: auto 0.6rem;

    .quote-text {
      font-size: 2.5rem;
    }

    .long-quote {
      font-size: 1.75rem;
    }
  }
}

@media screen and (max-width: 767px) {
  .component-quote-container {
    margin: auto 0.8rem;

    .quote-text {
      font-size: 1.75rem;
    }

    .long-quote {
      font-size: 1.5rem;
    }

    .fa-quote-left {
      font-size: 2.25rem;
    }
  }
}
</style>
