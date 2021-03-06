/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Google Cloud Natural Language API
 *
 * Google Cloud Natural Language API provides natural language understanding technologies to developers. Examples include sentiment analysis, entity recognition, and text annotations.
 *
 * @example
 * var google = require('googleapis');
 * var language = google.language('v1beta1');
 *
 * @namespace language
 * @type {Function}
 * @version v1beta1
 * @variation v1beta1
 * @param {object=} options Options for Language
 */
function Language(options) { // eslint-disable-line
  var self = this;
  self._options = options || {};

  self.documents = {

    /**
     * language.documents.analyzeSentiment
     *
     * @desc Analyzes the sentiment of the provided text.
     *
     * @alias language.documents.analyzeSentiment
     * @memberOf! language(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {language(v1beta1).AnalyzeSentimentRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeSentiment: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://language.googleapis.com/v1beta1/documents:analyzeSentiment',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * language.documents.annotateText
     *
     * @desc Advanced API that analyzes the document and provides a full set of text annotations, including semantic, syntactic, and sentiment information. This API is intended for users who are familiar with machine learning and need in-depth text features to build upon.
     *
     * @alias language.documents.annotateText
     * @memberOf! language(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {language(v1beta1).AnnotateTextRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    annotateText: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://language.googleapis.com/v1beta1/documents:annotateText',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    },

    /**
     * language.documents.analyzeEntities
     *
     * @desc Finds named entities (currently finds proper names) in the text, entity types, salience, mentions for each entity, and other properties.
     *
     * @alias language.documents.analyzeEntities
     * @memberOf! language(v1beta1)
     *
     * @param {object} params Parameters for request
     * @param {language(v1beta1).AnalyzeEntitiesRequest} params.resource Request body data
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    analyzeEntities: function (params, callback) {
      var parameters = {
        options: {
          url: 'https://language.googleapis.com/v1beta1/documents:analyzeEntities',
          method: 'POST'
        },
        params: params,
        requiredParams: [],
        pathParams: [],
        context: self
      };

      return createAPIRequest(parameters, callback);
    }

  };
}

/**
 * @typedef Document
 * @memberOf! language(v1beta1)
 * @type object
* @property {string} language The language of the document (if not specified, the language is
automatically detected). Both ISO and BCP-47 language codes are
accepted.&lt;br&gt;
**Current Language Restrictions:**

 * Only English, Spanish, and Japanese textual content
   are supported, with the following additional restriction:
   * `analyzeSentiment` only supports English text.
If the language (either specified by the caller or automatically detected)
is not supported by the called API method, an `INVALID_ARGUMENT` error
is returned.
* @property {string} gcsContentUri The Google Cloud Storage URI where the file content is located.
* @property {string} type Required. If the type is not set or is `TYPE_UNSPECIFIED`,
returns an `INVALID_ARGUMENT` error.
* @property {string} content The content of the input in string format.
*/
/**
 * @typedef TextSpan
 * @memberOf! language(v1beta1)
 * @type object
* @property {integer} beginOffset The API calculates the beginning offset of the content in the original
document according to the EncodingType specified in the API request.
* @property {string} content The content of the output text.
*/
/**
 * @typedef Status
 * @memberOf! language(v1beta1)
 * @type object
* @property {integer} code The status code, which should be an enum value of google.rpc.Code.
* @property {object[]} details A list of messages that carry the error details.  There will be a
common set of message types for APIs to use.
* @property {string} message A developer-facing error message, which should be in English. Any
user-facing error message should be localized and sent in the
google.rpc.Status.details field, or localized by the client.
*/
/**
 * @typedef AnalyzeEntitiesRequest
 * @memberOf! language(v1beta1)
 * @type object
 * @property {language(v1beta1).Document} document Input document.
 * @property {string} encodingType The encoding type used by the API to calculate offsets.
 */
/**
 * @typedef EntityMention
 * @memberOf! language(v1beta1)
 * @type object
 * @property {language(v1beta1).TextSpan} text The mention text.
 */
/**
 * @typedef AnalyzeSentimentRequest
 * @memberOf! language(v1beta1)
 * @type object
* @property {language(v1beta1).Document} document Input document. Currently, `analyzeSentiment` only supports English text
(Document.language=&quot;EN&quot;).
*/
/**
 * @typedef AnalyzeSentimentResponse
 * @memberOf! language(v1beta1)
 * @type object
* @property {language(v1beta1).Sentiment} documentSentiment The overall sentiment of the input document.
* @property {string} language The language of the text, which will be the same as the language specified
in the request or, if not specified, the automatically-detected language.
*/
/**
 * @typedef DependencyEdge
 * @memberOf! language(v1beta1)
 * @type object
* @property {integer} headTokenIndex Represents the head of this token in the dependency tree.
This is the index of the token which has an arc going to this token.
The index is the position of the token in the array of tokens returned
by the API method. If this token is a root token, then the
`head_token_index` is its own index.
* @property {string} label The parse label for the token.
*/
/**
 * @typedef AnnotateTextRequest
 * @memberOf! language(v1beta1)
 * @type object
 * @property {language(v1beta1).Document} document Input document.
 * @property {string} encodingType The encoding type used by the API to calculate offsets.
 * @property {language(v1beta1).Features} features The enabled features.
 */
/**
 * @typedef Sentence
 * @memberOf! language(v1beta1)
 * @type object
 * @property {language(v1beta1).TextSpan} text The sentence text.
 */
/**
 * @typedef Features
 * @memberOf! language(v1beta1)
 * @type object
 * @property {boolean} extractDocumentSentiment Extract document-level sentiment.
 * @property {boolean} extractEntities Extract entities.
 * @property {boolean} extractSyntax Extract syntax information.
 */
/**
 * @typedef PartOfSpeech
 * @memberOf! language(v1beta1)
 * @type object
 * @property {string} tag The part of speech tag.
 */
/**
 * @typedef AnnotateTextResponse
 * @memberOf! language(v1beta1)
 * @type object
* @property {language(v1beta1).Entity[]} entities Entities, along with their semantic information, in the input document.
Populated if the user enables
AnnotateTextRequest.Features.extract_entities.
* @property {language(v1beta1).Sentiment} documentSentiment The overall sentiment for the document. Populated if the user enables
AnnotateTextRequest.Features.extract_document_sentiment.
* @property {string} language The language of the text, which will be the same as the language specified
in the request or, if not specified, the automatically-detected language.
* @property {language(v1beta1).Token[]} tokens Tokens, along with their syntactic information, in the input document.
Populated if the user enables
AnnotateTextRequest.Features.extract_syntax.
* @property {language(v1beta1).Sentence[]} sentences Sentences in the input document. Populated if the user enables
AnnotateTextRequest.Features.extract_syntax.
*/
/**
 * @typedef Entity
 * @memberOf! language(v1beta1)
 * @type object
* @property {object} metadata Metadata associated with the entity.

Currently, only Wikipedia URLs are provided, if available.
The associated key is &quot;wikipedia_url&quot;.
* @property {number} salience The salience score associated with the entity in the [0, 1.0] range.

The salience score for an entity provides information about the
importance or centrality of that entity to the entire document text.
Scores closer to 0 are less salient, while scores closer to 1.0 are highly
salient.
* @property {string} type The entity type.
* @property {language(v1beta1).EntityMention[]} mentions The mentions of this entity in the input document. The API currently
supports proper noun mentions.
* @property {string} name The representative name for the entity.
*/
/**
 * @typedef Sentiment
 * @memberOf! language(v1beta1)
 * @type object
* @property {number} polarity Polarity of the sentiment in the [-1.0, 1.0] range. Larger numbers
represent more positive sentiments.
* @property {number} magnitude A non-negative number in the [0, +inf) range, which represents
the absolute magnitude of sentiment regardless of polarity (positive or
negative).
*/
/**
 * @typedef Token
 * @memberOf! language(v1beta1)
 * @type object
* @property {language(v1beta1).TextSpan} text The token text.
* @property {language(v1beta1).PartOfSpeech} partOfSpeech Parts of speech tag for this token.
* @property {language(v1beta1).DependencyEdge} dependencyEdge Dependency tree parse for this token.
* @property {string} lemma [Lemma](https://en.wikipedia.org/wiki/Lemma_(morphology))
of the token.
*/
/**
 * @typedef AnalyzeEntitiesResponse
 * @memberOf! language(v1beta1)
 * @type object
* @property {language(v1beta1).Entity[]} entities The recognized entities in the input document.
* @property {string} language The language of the text, which will be the same as the language specified
in the request or, if not specified, the automatically-detected language.
*/
module.exports = Language;
