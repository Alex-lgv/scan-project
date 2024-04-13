const getObject = (
  INN,
  limit,
  tonality,
  maxFullness,
  inBusinessNews,
  onlyMainRole,
  onlyWithRiskFactors,
  isTechNews,
  isAnnouncement,
  isDigest,
  startDate,
  endDate
) => {
  return {
    issueDateInterval: {
      startDate: `${startDate}T00:00:00+03:00`,
      endDate: `${endDate}T23:59:59+03:00`,
    },
    searchContext: {
      targetSearchEntitiesContext: {
        targetSearchEntities: [
          {
            type: 'company',
            sparkId: null,
            entityId: null,
            inn: INN,
            maxFullness: maxFullness,
            inBusinessNews: inBusinessNews,
          },
        ],
        onlyMainRole: onlyMainRole,
        tonality: tonality,
        onlyWithRiskFactors: onlyWithRiskFactors,
        riskFactors: {
          and: [],
          or: [],
          not: [],
        },
        themes: {
          and: [],
          or: [],
          not: [],
        },
      },
      themesFilter: {
        and: [],
        or: [],
        not: [],
      },
    },
    searchArea: {
      includedSources: [],
      excludedSources: [],
      includedSourceGroups: [],
      excludedSourceGroups: [],
    },
    attributeFilters: {
      excludeTechNews: !isTechNews,
      excludeAnnouncements: !isAnnouncement,
      excludeDigests: !isDigest,
    },
    similarMode: 'duplicates',
    limit: limit,
    sortType: 'sourceInfluence',
    sortDirectionType: 'desc',
    intervalType: 'month',
    histogramTypes: ['totalDocuments', 'riskFactors'],
  };
};

export default getObject;
