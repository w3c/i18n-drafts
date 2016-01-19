var dt = { }


function getYear (d) {
	parts = d.split('-')
	return parts[0]
	}

dt.pubyear = getYear(f.firstPubDate)
dt.curryear = getYear(f.thisVersion.date)
dt.copyrightYear = dt.pubyear
if (dt.pubyear != dt.curryear) dt.copyrightYear += '-'+dt.curryear


dt.enVersion = f.lastSubstUpdate.date
dt.thisVersionPlain = f.thisVersion.date+' '+f.thisVersion.time
