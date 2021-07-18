console.log('ted');

function solution(today, limit) {
  const tableData = document.getElementsByTagName('table');
  let countDays = 0;
  var TRs = tableData[0].getElementsByTagName('tr');
  let AllDates = [];
  for (var j = 0; j < TRs.length; j++) {
    var TDs = TRs[j].getElementsByTagName('td');
    let borrowDate = [];
    let overDueDate = [];
    borrowDate.push(TDs[1].innerText);
    overDueDate.push(TDs[2].innerText);
    AllDates.push({ borrowDate: TDs[1].innerText, dueDate: TDs[2].innerText });
  }

  AllDates.forEach((dateObj) => {
    if (dateObj.dueDate === '') {
      dateObj.dueDate = today;
    }

    const diffTime = Math.abs(
      new Date(dateObj.dueDate) - new Date(dateObj.borrowDate)
    );

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > limit) {
      countDays++;
    }
  });

  return countDays;
}

console.log(solution('2016-11-30', 14));
