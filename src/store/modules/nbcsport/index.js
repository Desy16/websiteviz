const getters = {
    displayNbcsportDegree: (state) => state.nbcsport[0].degree,
    displayNbcsportPagerank: (state) => state.nbcsport[0].pagerank,
    displayNbcsportCloseness: (state) => state.nbcsport[0].closeness,
    displayNbcsportBetweenness: (state) => state.nbcsport[0].betweenness
}
const actions = {}
const mutations = {}

export default {
    namespaced: true,

    state() {
        return {
            nbcsport: [
                {
                    "closeness": [
                        {
                            "depth2": [
                                {
                                    "https://www.nbcsports.com/terms-use": 0.08868186782614901
                                },
                                {
                                    "https://www.nbcsports.com/live": 0.08523791179406556
                                },
                                {
                                    "http://www.nbcsports.com/social-media-directory": 0.08157158844246108
                                },
                                {
                                    "https://www.nbcsports.com/": 0.08156142588390347
                                },
                                {
                                    "https://www.nbcsports.com/gold": 0.08156142588390347
                                },
                                {
                                    "https://www.nbcsports.com/our-history": 0.08156142588390347
                                },
                                {
                                    "https://www.nbcsports.com/content/closed-captioning": 0.08150734005772052
                                },
                                {
                                    "https://www.nbcsports.com/FAQ": 0.08150734005772052
                                },
                                {
                                    "https://www.nbcsports.com/gold/terms-service": 0.08150734005772052
                                },
                                {
                                    "https://www.nbcsports.com/gold/faq": 0.08150734005772052
                                }
                            ]
                        },
                        {
                            "depth3": [
                                {
                                    "https://www.nbcsports.com/terms-use": 0.08921613479975972
                                },
                                {
                                    "https://www.nbcsports.com/live": 0.08372310269062273
                                },
                                {
                                    "https://www.nbcsports.com/": 0.07373777851651177
                                },
                                {
                                    "https://www.nbcsports.com/gold": 0.07373777851651177
                                },
                                {
                                    "http://www.nbcsports.com/social-media-directory": 0.07373103327673138
                                },
                                {
                                    "https://www.nbcsports.com/our-history": 0.07372570025631249
                                },
                                {
                                    "https://www.nbcsports.com/content/closed-captioning": 0.07371362595230721
                                },
                                {
                                    "https://www.nbcsports.com/FAQ": 0.07371362595230721
                                },
                                {
                                    "https://www.nbcsports.com/gold/terms-service": 0.07371362595230721
                                },
                                {
                                    "https://www.nbcsports.com/gold/faq": 0.07371362595230721
                                }
                            ]
                        }
                    ],
                    "betweenness": [
                        {
                            "depth2": [
                                {
                                    "https://www.nbcsports.com/nfl": 0.016441419592065045
                                },
                                {
                                    "https://www.nbcsports.com/": 0.0073728341164760285
                                },
                                {
                                    "https://www.nbcsports.com/college-basketball": 0.00680238714734147
                                },
                                {
                                    "https://www.nbcsports.com/soccer": 0.006086090633363725
                                },
                                {
                                    "https://www.nbcsports.com/figure-skating": 0.0044027677907483125
                                },
                                {
                                    "https://www.nbcsports.com/nba": 0.004399478431375778
                                },
                                {
                                    "https://www.nbcsports.com/nhl": 0.004199429439707923
                                },
                                {
                                    "https://www.nbcsports.com/mlb": 0.0036737264836092056
                                },
                                {
                                    "https://www.nbcsports.com/college-football": 0.003386705380335696
                                },
                                {
                                    "https://www.nbcsports.com/olympic-channel": 0.0033619208646110143
                                }
                            ]
                        },
                        {
                            "depth3": [
                                {
                                    "https://www.nbcsports.com/nfl": 0.023433060141831285
                                },
                                {
                                    "https://www.nbcsports.com/college-basketball": 0.007845484036224894
                                },
                                {
                                    "https://www.nbcsports.com/college-football": 0.006009884411800534
                                },
                                {
                                    "https://www.nbcsports.com/nhl": 0.005887636387751744
                                },
                                {
                                    "https://www.nbcsports.com/mlb": 0.005699609240487858
                                },
                                {
                                    "https://www.nbcsports.com/soccer": 0.00519388323680312
                                },
                                {
                                    "https://www.nbcsports.com/": 0.004642435279293376
                                },
                                {
                                    "https://www.nbcsports.com/nba": 0.0044091887771587224
                                },
                                {
                                    "http://scores.nbcsports.com/mlb/teams.asp": 0.00357244156753684
                                },
                                {
                                    "https://www.nbcsports.com/terms-use": 0.003284535601554593
                                }
                            ]
                        }
                    ],
                    "degree": [
                        {
                            "depth2": [
                                {
                                    "https://www.nbcsports.com/terms-use": 0.09288627095604893
                                },
                                {
                                    "https://www.nbcsports.com/live": 0.08816104602239627
                                },
                                {
                                    "https://www.nbcsports.com/": 0.08518350702310828
                                },
                                {
                                    "https://www.nbcsports.com/nfl": 0.08466567415366691
                                },
                                {
                                    "https://www.nbcsports.com/gold/faq": 0.08453621593630656
                                },
                                {
                                    "https://www.nbcsports.com/soccer": 0.0842125703929057
                                },
                                {
                                    "https://www.nbcsports.com/gold/terms-service": 0.0842125703929057
                                },
                                {
                                    "https://www.nbcsports.com/college-football": 0.08395365395818499
                                },
                                {
                                    "https://www.nbcsports.com/FAQ": 0.08388892484950482
                                },
                                {
                                    "https://www.nbcsports.com/nhl": 0.08382419574082464
                                }
                            ]
                        },
                        {
                            "depth3": [
                                {
                                    "https://www.nbcsports.com/terms-use": 0.09037900874635568
                                },
                                {
                                    "https://www.nbcsports.com/live": 0.08411618615700249
                                },
                                {
                                    "https://www.nbcsports.com/": 0.07189648346110931
                                },
                                {
                                    "https://www.nbcsports.com/gold/faq": 0.07173451391138466
                                },
                                {
                                    "https://www.nbcsports.com/gold/terms-service": 0.0716445308282043
                                },
                                {
                                    "https://www.nbcsports.com/gold": 0.07155454774502394
                                },
                                {
                                    "https://www.nbcsports.com/FAQ": 0.07155454774502394
                                },
                                {
                                    "https://www.nbcsports.com/content/closed-captioning": 0.07137458157866322
                                },
                                {
                                    "https://www.nbcsports.com/our-history": 0.07126660187884679
                                },
                                {
                                    "http://www.nbcsports.com/social-media-directory": 0.07083468307958105
                                }
                            ]
                        }
                    ],
                    "pagerank": [
                        {
                            "depth2": [
                                {
                                    "https://www.nbcsports.com/terms-use": 0.0031104212730238808
                                },
                                {
                                    "https://www.nbcsports.com/": 0.0030846006867599703
                                },
                                {
                                    "https://www.nbcsports.com/gold": 0.0030846006867599703
                                },
                                {
                                    "http://www.nbcsports.com/social-media-directory": 0.0029780926881306023
                                },
                                {
                                    "https://www.nbcsports.com/content/closed-captioning": 0.0029780926881306023
                                },
                                {
                                    "https://www.nbcsports.com/our-history": 0.0029780926881306023
                                },
                                {
                                    "https://www.nbcsports.com/FAQ": 0.0029780926881306023
                                },
                                {
                                    "https://www.nbcsports.com/gold/terms-service": 0.0029780926881306023
                                },
                                {
                                    "https://www.nbcsports.com/gold/faq": 0.0029780926881306023
                                },
                                {
                                    "http://www.nbcsports.com/newsletters": 0.002970759844965312
                                }
                            ]
                        },
                        {
                            "depth3": [
                                {
                                    "https://www.nbcsports.com/terms-use": 0.002902325949186816
                                },
                                {
                                    "https://www.nbcsports.com/gold": 0.0023646028969590504
                                },
                                {
                                    "https://www.nbcsports.com/": 0.002364364563438018
                                },
                                {
                                    "http://www.nbcsports.com/social-media-directory": 0.0022894714912477508
                                },
                                {
                                    "https://www.nbcsports.com/content/closed-captioning": 0.0022894714912477508
                                },
                                {
                                    "https://www.nbcsports.com/our-history": 0.0022894714912477508
                                },
                                {
                                    "https://www.nbcsports.com/FAQ": 0.0022894714912477508
                                },
                                {
                                    "https://www.nbcsports.com/gold/terms-service": 0.0022894714912477508
                                },
                                {
                                    "https://www.nbcsports.com/gold/faq": 0.0022894714912477508
                                },
                                {
                                    "http://www.nbcsports.com/newsletters": 0.002285485484320728
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    getters,
    actions,
    mutations
}