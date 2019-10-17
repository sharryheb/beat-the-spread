**Pages on “Beat The Spread Football Gambling Game”**


*   Fan Standings (homepage) 
    *   Have usernames and scores, like: \
**Fan Standings **(points) \
 \
Star123 \
(avatar image) \
_14 correct predictions_ \
SarahZhou \
(avatar image) \
_13 correct predictions_ \
The Notorious M.P.J. \
(avatar image) \
_1 correct prediction_ \
(etc.) \

    *   Include date of games and point spreads, like on [https://www.espn.com/nfl/scoreboard](https://www.espn.com/nfl/scoreboard), where as of Sat, 10-12 it could say: \
 \
**Sunday, October 13th** \
[Seahawks logo] \
[Browns logo] \
Location: Cleveland, OH \
_Seahawks predicted to win by 1 point or more_ \

    *   Login \

*   Profile page (login page)
    *   Username (not real name!) \

    *   Avatar image \

    *   Total Points \
Correct Predictions: 13 \
Incorrection Predictions: 1 \

    *   Reset Info \
Username \
Password \
 \

    *   Include option to choose for or against prediction

        **Sunday, October 13th** \
[Seahawks logo] \
[Browns logo] \
Location: Cleveland, OH \
_Seahawks predicted to win by 1 point or more \
_ \
Agree with Prediction? \
[x] Yes \
[x] No \
 \
(etc.)_ \
_

*   Nav bar at top:
    *   Fan Standings (homepage)
    *   Sign Up
    *   Sign In (Profile page)
    *   About
*   Sign Up page

	Username (text field) \
	

	Avatar (image upload field)

	

	Password (text field) \
 \
	Retype password (text field)

**Database support: **



*   Users table: userid, username, avatar, email, password.
*   Predictions table: userid, gameid, prediction (what does this look like?)
*   Teams table: teamid, teamname, teamlogo, etc? (stadium, city/state, metadata)
*   Games table: gameid, weekNumber, homeTeamId, awayTeamId, overunder, line, winTeamScore, loseTeamScore, winTeam
*   Results table: gameid, userid, winlossOU, winlossLine \

