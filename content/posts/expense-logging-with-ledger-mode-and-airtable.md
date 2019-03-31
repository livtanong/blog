+++
title = "Expense Logging with Ledger Mode and Airtable"
author = ["Levi Tan Ong"]
lastmod = 2019-03-31T15:13:06+08:00
draft = true
+++

## Summary {#summary}

Many companies and organizations subsidize certain things like gas, transit,
food, and lodging for their employees. While one might consider personal and
company expenses two separate things, it is useful sometimes to keep duplicate
records because we don't want to assume those benefits are there forever. One
then can be faced with the rather unenviable task of entering transactional data
in both personal bookkeeping and whatever online system your company prescribes.
In my case, I use ledger-mode for personal accounting and airtable for my
company. This article details my efforts at minimizing duplicated effort given
interoperation between these two systems.


## Ledger Data {#ledger-data}

If you're like me, you use ledger to keep track of your finances. You've tried
all sorts of expense tracking apps like toshl, pennies, mint, and even excel.
None of them stuck, you realize, because none of them were emacs. Some time ago,
you stumbled onto an article on reddit about [Plaintext Accounting](https://plaintextaccounting.org/) and you were
sold, because [Ledger](https://www.ledger-cli.org/) is emacs.

For a while, you're satisfied because your finances are now in emacs along with
the rest of your life. Until one day, as you enter that gas expenditure into
your ledger journal...

```ledger
2019/03/29 Richard Stallman's Gas Station
    expenses:transport:fuel                  2000 PHP
    expenses:food                             200 PHP ;; What? I was hungry.
    liabilities:credit                      -2200 PHP ;; Actually not necessary. If left blank, it will calculate the diff.
```

...you realize your company subsidizes transportation costs and you can enter it
into the company [Airtable](https://airtable.com)&nbsp;[^fn:1] for expense logging. You brace yourself
for the sin you're about to commit,&nbsp;[^fn:2] and duplicate your work into
airtable.

As penance, you look for a better way, and find this post.


## Exploration {#exploration}

Let's take a look at the Airtable API.

Let's _mise en place_.&nbsp;[^fn:3]

```emacs-lisp
(use-package request :ensure t)
(use-package ledger-mode :ensure t)
```

```restclient
GET https://example.com
```

[^fn:1]: Think of it as a reasonably flexible and easy-to-use database with strong support for collaboration. It's also got some nice usability features—it can even generate a beautiful form for data input so you don't have to fill a row in a table. I have even attempted to manage my information on Dungeons & Dragons on this. I eventually gave up, but that's more due to my lack of time than Airtable's lack of power.
[^fn:2]: Repeating myself.
[^fn:3]: The french cooking term for placing everything you need set up in front of you, so you don't have to burn that omelette while looking for that parsley.
